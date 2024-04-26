import React, { useEffect, useState } from "react";
import { Table, Tag, Input } from "antd";

const { Search } = Input;

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    className: "px-4 py-2",
  },
  {
    title: "UserId",
    dataIndex: "userId",
    className: "px-4 py-2",
  },
  {
    title: "Title",
    dataIndex: "title",
    className: "px-4 py-2",
  },
  {
    title: "Body",
    dataIndex: "body",
    className: "px-4 py-2",
  },
  {
    title: "Tags",
    dataIndex: "tags",
    className: "px-4 py-2",
    render: (_, { tags }) => (
      <div className="flex flex-wrap">
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "classic") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag} className="m-1">
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </div>
    ),
    filters: [
      {
        text: "mystery",
        value: "mystery",
      },
      {
        text: "american",
        value: "american",
      },
      {
        text: "history",
        value: "history",
      },
      {
        text: "love",
        value: "love",
      },
      {
        text: "english",
        value: "english",
      },
      {
        text: "classic",
        value: "classic",
      },
      {
        text: "french",
        value: "french",
      },
      {
        text: "fiction",
        value: "fiction",
      },
      {
        text: "crime",
        value: "crime",
      },
      {
        text: "magical",
        value: "magical",
      },
      {
        text: "Evolution",
        value: "Evolution",
      },
      {
        text: "Peace",
        value: "Peace",
      },
    ],
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.tags.includes(value),
  },
  {
    title: "Reactions",
    dataIndex: "reactions",
    className: "px-4 py-2",
  },
];

const data = [
  {
    id: 11,
    userId: 25,
    title: "It wasn't quite yet time to panic.",
    body: "It wasn't quite yet time to panic. There was still time to salvage the situation. At least that is what she was telling himself. The reality was that it was time to panic and there wasn't time to salvage the situation, but he continued to delude himself into believing there was.",
    tags: ["mystery", "american", "history"],
    reactions: 5,
  },
  {
    id: 12,
    userId: 26,
    title: "She was aware that things could go wrong.",
    body: "She was aware that things could go wrong. In fact, she had trained her entire life in anticipation that things would go wrong one day. She had quiet confidence as she started to see that this was the day that all her training would be worthwhile and useful. At this point, she had no idea just how wrong everything would go that day.",
    tags: ["love", "english"],
    reactions: 7,
  },
  {
    id: 13,
    userId: 44,
    title: "She wanted rainbow hair.",
    body: "She wanted rainbow hair. That's what she told the hairdresser. It should be deep rainbow colors, too. She wasn't interested in pastel rainbow hair. She wanted it deep and vibrant so there was no doubt that she had done this on purpose.",
    tags: ["mystery", "classic", "french"],
    reactions: 0,
  },
  {
    id: 14,
    userId: 1,
    title: "The paper was blank.",
    body: "The paper was blank. It shouldn't have been. There should have been writing on the paper, at least a paragraph if not more. The fact that the writing wasn't there was frustrating. Actually, it was even more than frustrating. It was downright distressing.",
    tags: ["mystery", "english", "love"],
    reactions: 0,
  },
  {
    id: 15,
    userId: 15,
    title: "The trees, therefore, must be such old",
    body: "The trees, therefore, must be such old and primitive techniques that they thought nothing of them, deeming them so inconsequential that even savages like us would know of them and not be suspicious. At that, they probably didn't have too much time after they detected us orbiting and intending to land. And if that were true, there could be only one place where their civilization was hidden.",
    tags: ["fiction", "history", "crime"],
    reactions: 1,
  },
  {
    id: 16,
    userId: 31,
    title: "There was only one way to do things in the Statton house.",
    body: "There was only one way to do things in the Statton house. That one way was to do exactly what the father, Charlie, demanded. He made the decisions and everyone else followed without question. That was until today.",
    tags: ["magical", "french", "american"],
    reactions: 5,
  },
  {
    id: 17,
    userId: 5,
    title: "She was in a hurry.",
    body: "She was in a hurry. Not the standard hurry when you're in a rush to get someplace, but a frantic hurry. The type of hurry where a few seconds could mean life or death. She raced down the road ignoring speed limits and weaving between cars. She was only a few minutes away when traffic came to a dead standstill on the road ahead.",
    tags: ["french", "magical", "english"],
    reactions: 0,
  },
  {
    id: 18,
    userId: 28,
    title: "She had a terrible habit o comparing her life to others",
    body: "She had a terrible habit o comparing her life to others. She realized that their life experiences were completely different than her own and that she saw only what they wanted her to see, but that didn't matter. She still compared herself and yearned for what she thought they had and she didn't.",
    tags: ["history", "french", "love"],
    reactions: 3,
  },
  {
    id: 19,
    userId: 46,
    title: "The rain and wind abruptly stopped.",
    body: "The rain and wind abruptly stopped, but the sky still had the gray swirls of storms in the distance. Dave knew this feeling all too well. The calm before the storm. He only had a limited amount of time before all Hell broke loose, but he stopped to admire the calmness. Maybe it would be different this time, he thought, with the knowledge deep within that it wouldn't.",
    tags: ["fiction", "crime", "magical"],
    reactions: 8,
  },
  {
    id: 20,
    userId: 38,
    title: "He couldn't remember exactly where he had read it",
    body: "He couldn't remember exactly where he had read it, but he was sure that he had. The fact that she didn't believe him was quite frustrating as he began to search the Internet to find the article. It wasn't as if it was something that seemed impossible. Yet she insisted on always seeing the source whenever he stated a fact.",
    tags: ["french", "classic"],
    reactions: 9,
  },

  {
    id: 21,
    userId: 45,
    title: "Feeling the breeze",
    body: "Walking by the seaside, she felt the gentle breeze caress her face, bringing a sense of calmness and tranquility. With each step, she felt more connected to nature and its beauty.",
    tags: ["nature", "beach", "serenity"],
    reactions: 5,
  },
  {
    id: 22,
    userId: 27,
    title: "A cup of memories",
    body: "Sipping on her favorite blend of tea, memories flooded her mind. Each sip transported her to moments of laughter, joy, and reflection. It was more than just a beverage; it was a cup of cherished memories.",
    tags: ["nostalgia", "comfort", "reflection"],
    reactions: 7,
  },
  {
    id: 23,
    userId: 47,
    title: "Dancing in the rain",
    body: "She wanted to dance in the rain, to feel the droplets cascade down her skin, washing away all worries and sorrows. Embracing the moment, she stepped outside, letting the rain envelop her in its refreshing embrace.",
    tags: ["joy", "freedom", "rain"],
    reactions: 0,
  },
  {
    id: 24,
    userId: 2,
    title: "Chasing dreams",
    body: "With determination in her heart, she pursued her dreams relentlessly, overcoming obstacles and doubts along the way. The journey was challenging, but she knew that every step brought her closer to realizing her aspirations.",
    tags: ["ambition", "perseverance", "success"],
    reactions: 0,
  },
  {
    id: 25,
    userId: 16,
    title: "Exploring the unknown",
    body: "Venturing into uncharted territory, she felt a sense of exhilaration and anticipation. With each discovery, she realized the vastness of the world and her own potential to explore it.",
    tags: ["adventure", "discovery", "curiosity"],
    reactions: 1,
  },
  {
    id: 26,
    userId: 32,
    title: "Embracing change",
    body: "Change was inevitable, but she welcomed it with open arms, knowing that it brought opportunities for growth and transformation. Instead of resisting, she embraced the journey of change, trusting in the path it would lead her on.",
    tags: ["growth", "adaptation", "evolution"],
    reactions: 5,
  },
  {
    id: 27,
    userId: 6,
    title: "Finding inner peace",
    body: "Amidst the chaos of life, she sought refuge in moments of solitude, finding solace in the quiet whispers of her own thoughts. It was in these moments that she found true inner peace and serenity.",
    tags: ["meditation", "mindfulness", "peace"],
    reactions: 0,
  },
  {
    id: 28,
    userId: 29,
    title: "Embracing imperfection",
    body: "Perfection was an illusion she no longer chased. Instead, she embraced her flaws and imperfections, recognizing that they were what made her unique and beautiful. In embracing herself fully, she found true freedom and self-acceptance.",
    tags: ["self-love", "authenticity", "imperfection"],
    reactions: 3,
  },
  {
    id: 29,
    userId: 47,
    title: "Chasing sunsets",
    body: "As the sun dipped below the horizon, painting the sky in hues of orange and pink, she felt a sense of awe and wonder wash over her. Each sunset was a reminder of the beauty and magic that existed in the world, filling her heart with gratitude.",
    tags: ["sunset", "gratitude", "beauty"],
    reactions: 8,
  },
  {
    id: 30,
    userId: 39,
    title: "Lost in a good book",
    body: "With each page turned, she was transported to new worlds and adventures, losing herself in the magic of storytelling. It was in the pages of a good book that she found solace and escape from the worries of the world.",
    tags: ["reading", "imagination", "escapism"],
    reactions: 9,
  },
];

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = () => {
    const filtered = data.filter((item) =>
      Object.values(item).some(
        (val) =>
          typeof val === "string" &&
          val.toLowerCase().includes(searchText.toLowerCase())
      )
    );
    setFilteredData(filtered);
  };

  useEffect(() => {
    handleSearch();
  }, [searchText]);

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div className="container mx-auto p-4">
      <Search
        placeholder="Search...(based on title and body)"
        allowClear
        enterButton
        onChange={(e) => setSearchText(e.target.value)}
        className="mb-4"
      />
      <Table columns={columns} dataSource={filteredData} onChange={onChange} />
    </div>
  );
};

export default App;
