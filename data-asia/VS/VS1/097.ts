import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Lance's Charizard",
         ja: "ランスのカリザード",
         fr: "Charizard de Lance",
         de: "Lances Charizard",
         es: "Charizard de Lance",
         it: "Il Charizard di Lance",
         pt: "Charizard de Lance",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [6],
      hp: 80,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fire", "Fire", "Colorless"],
          name: {
            en: "Flamethrower",
            ja: "火炎放射器",
            fr: "Lance-flammes",
            de: "Flammenwerfer",
            es: "Echador de llama",
            it: "Lanciafiamme",
            pt: "Lança -chamas",
          },
          effect: {
            en: "Discard 1 Fire Energy card attached to Lance's Charizard in order to use this attack.",
            ja: "この攻撃を使用するために、ランスのカリザードに取り付けられた1つのファイアエネルギーカードを捨てます。",
            fr: "Jetez 1 carte d'énergie de feu attachée au charizard de Lance afin d'utiliser cette attaque.",
            de: "Lanze 1 Feuersenergiekarte an Lances Charizard verwerfen, um diesen Angriff zu verwenden.",
            es: "Descarte 1 Tarjeta de energía de fuego adjunta a Lance's Charizard para usar este ataque.",
            it: "Scartare 1 scheda di energia antincendio collegata al Charizard di Lance per usare questo attacco.",
            pt: "Descarte 1 cartão de energia de incêndio ligado ao Charizard de Lance para usar esse ataque.",
          },
          damage: 40,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "normal",
        },
      ],
};
