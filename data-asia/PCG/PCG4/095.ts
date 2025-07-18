import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Steelix ex",
         ja: "Steelix Ex",
         fr: "Steelix ex",
         de: "Steelix ex",
         es: "Steelix ex",
         it: "Stelix Ex",
         pt: "Steelix Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [208],
      hp: 150,
      types: ["Metal"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Poison Resistance",
            ja: "毒抵抗",
            fr: "Résistance au poison",
            de: "Giftwiderstand",
            es: "Resistencia al veneno",
            it: "Resistenza al veleno",
            pt: "Resistência ao veneno",
          },
          effect: {
            en: "Steelix ex can't be Poisoned.",
            ja: "Steelix Exは毒されることはできません。",
            fr: "Steelix Ex ne peut pas être empoisonné.",
            de: "Steelix EX kann nicht vergiftet werden.",
            es: "Steelix ex no se puede envenenarse.",
            it: "Steelix Ex non può essere avvelenato.",
            pt: "Steelix EX não pode ser envenenado.",
          },
      }],

      attacks: [
        {
          cost: ["Metal", "Colorless", "Colorless"],
          name: {
            en: "Metal Charge",
            ja: "金属電荷",
            fr: "Charge métallique",
            de: "Metallladung",
            es: "Carga de metal",
            it: "Carica metallica",
            pt: "Carga de metal",
          },
          effect: {
            en: "Put 1 damage counter on Steelix ex.",
            ja: "Steelix Exに1つのダメージカウンターを置きます。",
            fr: "Mettez 1 compteur de dégâts sur Steelix Ex.",
            de: "Legen Sie 1 Schadenschalter auf Steelix Ex.",
            es: "Pon 1 mostrador de daño en Steelix Ex.",
            it: "Metti 1 contatore di danni su Steilix Ex.",
            pt: "Coloque 1 contador de danos no Steelix Ex.",
          },
          damage: 70,
        },
        {
          cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
          name: {
            en: "Mudslide",
            ja: "土砂崩れ",
            fr: "Glissement de terrain",
            de: "Schlammlidung",
            es: "Avalancha de lodo",
            it: "Frana",
            pt: "Deslizamento de terra",
          },
          effect: {
            en: "Discard 2 Fighting Energy attached to Steelix ex and choose 1 of your opponent's Pokemon. This attack does 100 damage to that Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "Steelix Exに取り付けられた2つの戦闘エネルギーを捨て、相手のポケモンを1つ選択します。この攻撃は、そのポケモンに100のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Jetez l'énergie de combat 2 attachée à Steelix EX et choisissez 1 des pokemon de votre adversaire. Cette attaque fait 100 dégâts à ce Pokémon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Verwerfen Sie 2 Kampfenergie an Steelix EX und wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 100 Schäden. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Descarte 2 energía de lucha unida a Steelix EX y elige 1 de los Pokémon de tu oponente. Este ataque hace 100 daños a ese Pokémon. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scartare 2 Energia di combattimento attaccata ad Steilix Ex e scegliere 1 del Pokemon del tuo avversario. Questo attacco infligge 100 danni a quel Pokemon. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Descarte 2 energia de combate ligada ao Steelix Ex e escolha 1 do Pokémon do seu oponente. Este ataque causa 100 danos a esse Pokémon. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
      ],

      retreat: 5,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};
