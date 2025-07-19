import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Arcanine ex",
         ja: "アルカニンEx",
         fr: "Arcanine ex",
         de: "Arcanine ex",
         es: "Arcanine Ex",
         it: "Arcanina ex",
         pt: "Arcanine Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [59],
      hp: 120,
      types: ["Fire"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Fire Remedy",
            ja: "火の治療法",
            fr: "Remède en incendie",
            de: "Feuermittel",
            es: "Remedio de fuego",
            it: "Rimedio del fuoco",
            pt: "Remédio de incêndio",
          },
          effect: {
            en: "Whenever you attach a Fire Energy from your hand to Arcanine ex, remove 1 damage counter and all Special Conditions from Arcanine ex.",
            ja: "手からアルカニンEXに火エネルギーを取り付けるときはいつでも、Arcanine Exから1つのダメージカウンターとすべての特別な条件を削除します。",
            fr: "Chaque fois que vous attachez une énergie de feu de votre main à l'arcanine ex, retirez 1 compteur de dégâts et toutes les conditions spéciales de l'arcanine ex.",
            de: "Wenn Sie eine Brandenergie von Ihrer Hand an Arcanin EX anbringen, entfernen Sie 1 Schadenschalter und alle besonderen Bedingungen von Arcanine EX.",
            es: "Cada vez que adjunta una energía de fuego de su mano a Arcanine EX, retire 1 contador de daño y todas las condiciones especiales de Arcanine Ex.",
            it: "Ogni volta che si collega un'energia di incendio dalla mano all'Arcanina Ex, rimuovere 1 contatore di danni e tutte le condizioni speciali dell'Arcanina Ex.",
            pt: "Sempre que você conectar uma energia de incêndio da sua mão ao arcanine ex, remova 1 contador de danos e todas as condições especiais do Arcanine Ex.",
          },
      }],

      attacks: [
        {
          cost: ["Fire", "Colorless"],
          name: {
            en: "Overrun",
            ja: "オーバーラン",
            fr: "Envahi",
            de: "Überrannt",
            es: "Invadir",
            it: "Invaso",
            pt: "Overnun",
          },
          effect: {
            en: "Does 20 damage to 1 of your opponent's Benched Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のベンチポケモンの1つに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Fait 20 dégâts à 1 des pokemon bancés de votre adversaire. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Schädigt 20 an einem Pokémon Ihres Gegners das Bank -Bank -Pokémon. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Hace 20 daños a 1 de los pokemon de banca de tu oponente. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Fa 20 danni a 1 del Pokemon in panchina del tuo avversario. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "20 danos a 1 dos Pokémon bancos do seu oponente. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 30,
        },
        {
          cost: ["Fire", "Fire", "Colorless"],
          name: {
            en: "Flame Swirl",
            ja: "炎の渦巻き",
            fr: "Swirl de flamme",
            de: "Flammwirbel",
            es: "Remolino de llamas",
            it: "Fiammata di fiamma",
            pt: "Rodo de chama",
          },
          effect: {
            en: "Discard 2 Fire Energy or 1 React Energy card attached to Arcanine ex.",
            ja: "Arcanine Exに取り付けられた2つの火エネルギーまたは1つの反応エネルギーカードを捨てます。",
            fr: "Jeter 2 Fire Energy ou 1 Carte d'énergie React Rattage attachée à l'arcanine Ex.",
            de: "Brunnen Sie 2 Feuerenergie oder 1 Reaktenergiekarte an Arcanin EX.",
            es: "Deseche 2 energía de fuego o 1 Tarjeta de energía reaccionada unida a Arcanine Ex.",
            it: "Scartare 2 Fire Energy o 1 React Energy Card collegata all'Arcanina Ex.",
            pt: "Descarte 2 energia de incêndio ou 1 cartão de energia reagir anexado ao arcanine Ex.",
          },
          damage: 100,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
