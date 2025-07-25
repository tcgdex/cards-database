import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Ninetales ex",
         ja: "ninetales ex",
         fr: "Ninetales ex",
         de: "Ninetales ex",
         es: "Ninetales ex",
         it: "Ninetales ex",
         pt: "Ninetales Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [38],
      hp: 90,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Intense Glare",
            ja: "激しいまぶしさ",
            fr: "Éblouissement intense",
            de: "Intensiver Blendung",
            es: "Resplandor intenso",
            it: "Bagliore intenso",
            pt: "Brilho intenso",
          },
          effect: {
            en: "Switch 1 of your opponent's Benched Pokemon with 1 of the Defending Pokemon. Your opponent chooses the Defending Pokemon to switch. The new Defending Pokemon is now Burned and Confused.",
            ja: "対戦相手のベンチポケモンの1つを防御ポケモンの1つに切り替えます。対戦相手は、防御するポケモンを選択して切り替えます。新しい防御ポケモンは今や燃え、混乱しています。",
            fr: "Communiquez 1 des Pokémon bancés de votre adversaire avec 1 des Pokémon en défense. Votre adversaire choisit le Pokémon en défense pour changer. Le nouveau Pokémon défendant est maintenant brûlé et confus.",
            de: "Wechseln Sie 1 des Pokémon Ihres Gegners mit einem der verteidigenden Pokémon. Ihr Gegner wählt das verteidigende Pokemon zum Wechseln. Das neue verteidigende Pokemon ist jetzt verbrannt und verwirrt.",
            es: "Cambie 1 del Pokémon de banca de tu oponente con 1 del Pokémon defensor. Tu oponente elige el Pokémon defensor para cambiar. El nuevo Pokémon defensor ahora está quemado y confundido.",
            it: "Switch 1 del Pokemon in panchina del tuo avversario con 1 del Pokemon in difesa. Il tuo avversario sceglie il Pokemon in carica da cambiare. Il nuovo Pokemon in carica è ora bruciato e confuso.",
            pt: "Switch 1 do Pokémon bancado do seu oponente com 1 do Pokémon atual. Seu oponente escolhe o pokemon defensor para mudar. O novo Pokémon atual está agora queimado e confuso.",
          },
        },
        {
          cost: ["Fire", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Fire Blast",
            ja: "火の爆発",
            fr: "Explosion de feu",
            de: "Feuerexplosion",
            es: "Explosión de fuego",
            it: "Fire Blast",
            pt: "Explosão de fogo",
          },
          effect: {
            en: "Discard a Fire Energy attached to Ninetales ex.",
            ja: "Ninetales Exに取り付けられた火エネルギーを廃棄します。",
            fr: "Jeter une énergie de feu attachée à Ninetales Ex.",
            de: "Eine Brandenergie entsorgen, die nach Ninetales ex gebunden ist.",
            es: "Deseche una energía de fuego unida a Ninetales Ex.",
            it: "Scartare un'energia di incendio attaccata a Ninetales Ex.",
            pt: "Descarte uma energia de incêndio ligada a Ninetales Ex.",
          },
          damage: 100,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
