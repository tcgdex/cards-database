import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Shining Charizard",
         ja: "輝くチャリザード",
         fr: "Charizard brillant",
         de: "Leuchtender Charizard",
         es: "Charizard brillante",
         it: "Shining Charizard",
         pt: "Charizard brilhante",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [6],
      hp: 100,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fire", "Fire", "Fire", "Lightning", "Lightning"],
          name: {
            en: "White-hot Flame",
            ja: "ホワイトホットの炎",
            fr: "Flamme à chaud",
            de: "Weiß-heiße Flamme",
            es: "Llama de color blanco",
            it: "Fiamma mora",
            pt: "Chama branca",
          },
          effect: {
            en: "Discard 1 Fire Energy card and 1 Lightning Energy card attached to Shining Charizard or this attack does nothing. Flip a coin. If tails, Shining Charizard does 30 damage to itself.",
            ja: "輝くチャリザードに取り付けられた1つの消防エネルギーカードと1枚の稲妻エネルギーカードを捨てるか、この攻撃は何もしません。コインをひっくり返します。尾の場合、輝くカリザードはそれ自体に30のダメージを与えます。",
            fr: "Jetez 1 carte d'énergie de feu et 1 carte d'énergie Lightning attachée à Shining Charizard ou cette attaque ne fait rien. Retourner une pièce. Si Tails, Shining Charizard se fait 30 dégâts.",
            de: "Abwerfen 1 Feuerergiekarte und 1 Blitzergiekarte, die an Shining Charizard angebracht ist, oder dieser Angriff tut nichts. Eine Münze drehen. Wenn Schwänze, verursacht Shining Charizard 30 Schäden an sich.",
            es: "Deseche 1 Tarjeta de energía de fuego y 1 tarjeta de energía Lightning unida a Shining Charizard o este ataque no hace nada. Voltea una moneda. Si Tails, Shining Charizard hace 30 daños a sí mismo.",
            it: "Scartare 1 carta di energia antincendio e 1 carta energetica fulmine attaccata a Shining Charizard o questo attacco non fa nulla. Capovolgi una moneta. Se le code, Shining Charizard infligge 30 danni a se stesso.",
            pt: "Descarte 1 cartão de energia de incêndio e 1 cartão de energia raios ligados a charizard brilhante ou esse ataque não faz nada. Vire uma moeda. Se a cauda, Shining Charizard causa 30 danos a si mesmo.",
          },
          damage: 100,
        },
      ],

      retreat: 3,

};
