import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Raikou",
         ja: "ライコウ",
         fr: "Raikou",
         de: "Raikou",
         es: "Raikou",
         it: "Raikou",
         pt: "Raikou",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [243],
      hp: 80,
      types: ["Lightning"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Lightning Burst",
            ja: "稲妻が破裂します",
            fr: "Éclatement de foudre",
            de: "Blitzburst",
            es: "Estallido",
            it: "Fulmini",
            pt: "Raio estourado",
          },
          effect: {
            en: "Whenever you attach a Lightning Energy card from your hand to Raikou, if your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. This power stops working while Raikou is Asleep, Confused, or Paralyzed.",
            ja: "手からライコウに稲妻エネルギーカードを取り付けるたびに、相手がベンチポケモンを持っている場合、彼または彼女はそれらの1つを選択し、防御するポケモンでそれを切り替えます。ライコウが眠っている、混乱し、麻痺している間、このパワーは機能しなくなります。",
            fr: "Chaque fois que vous attachez une carte d'énergie Lightning de votre main à Raikou, si votre adversaire a des Pokémon bancés, il en choisit un et le change avec le Pokémon en défense. Ce pouvoir cesse de fonctionner pendant que Raikou dort, confus ou paralysé.",
            de: "Immer wenn Sie eine Blitzelenergiekarte von Ihrer Hand an Raikou anbringen, wenn Ihr Gegner Pokémon mit Bank hat, wählt er oder sie 1 davon aus und schaltet sie mit dem verteidigenden Pokémon. Diese Kraft hört auf, zu arbeiten, während Raikou schläft, verwirrt oder gelähmt ist.",
            es: "Cada vez que adjuntas una tarjeta de energía de rayos de tu mano a Raikou, si tu oponente tiene algún Pokémon de banca, él o ella elige 1 de ellos y la cambia con los Pokémon defensores. Este poder deja de funcionar mientras Raikou está dormido, confundido o paralizado.",
            it: "Ogni volta che si collega una carta di energia lampo dalla tua mano a Raikou, se il tuo avversario ha dei Pokémon in panchina, ne sceglie 1 e lo cambia e lo cambia con il Pokémon in difesa. Questo potere smette di funzionare mentre Raikou dorme, confuso o paralizzato.",
            pt: "Sempre que você anexa um cartão de energia de raios da sua mão a Raikou, se seu oponente tiver algum Pokémon em banco, ele escolhe 1 deles e o troca com o Pokémon defensor. Esse poder para de funcionar enquanto Raikou está dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning", "Lightning", "Lightning"],
          name: {
            en: "Lightning Tackle",
            ja: "稲妻タックル",
            fr: "Tacle de foudre",
            de: "Blitzangriff",
            es: "Rayo",
            it: "Attrezzatura dei fulmini",
            pt: "Lightning Tackle",
          },
          effect: {
            en: "Flip a coin. If tails, Raikou does 20 damage to itself.",
            ja: "コインをひっくり返します。尾の場合、ライコウはそれ自体に20のダメージを与えます。",
            fr: "Retourner une pièce. Si Tails, Raikou se fait 20 dégâts.",
            de: "Eine Münze drehen. Wenn Schwänze, richtet sich Raikou 20 Schaden an.",
            es: "Voltea una moneda. Si Tails, Raikou hace 20 daños a sí mismo.",
            it: "Capovolgi una moneta. Se code, Raikou fa 20 danni a se stesso.",
            pt: "Vire uma moeda. Se a cauda, Raikou causa 20 danos a si mesmo.",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
      ],
};
