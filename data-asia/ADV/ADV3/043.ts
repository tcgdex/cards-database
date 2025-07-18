import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Altaria",
         ja: "アルタリア",
         fr: "Altaria",
         de: "Altaria",
         es: "Altaria",
         it: "Altaria",
         pt: "Altaria",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [334],
      hp: 80,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Dragon Dance",
            ja: "ドラゴンダンス",
            fr: "Danse dragon",
            de: "Drachentanz",
            es: "Dragón de dragón",
            it: "Dragon Dance",
            pt: "Dança do dragão",
          },
          effect: {
            en: "During your next turn, if any of your current Active Pokemon does damage to any Defending Pokemon, the attack does 40 more damage (before applying Weakness and Resistance).",
            ja: "次のターン中に、現在のアクティブなポケモンのいずれかが防御ポケモンにダメージを与えた場合、攻撃は40個のダメージを与えます（脱力感と抵抗を適用する前に）。",
            fr: "Au cours de votre prochain tour, si l'un de votre Pokémon actif actuel endommage tout Pokémon en défense, l'attaque fait 40 dégâts supplémentaires (avant d'appliquer la faiblesse et la résistance).",
            de: "Wenn Sie in Ihrer nächsten Kurve eines Ihrer aktuellen aktiven Pokémon an einem verteidigenden Pokemon beschädigen, verursacht der Angriff 40 weitere Schäden (bevor sie Schwäche und Widerstand anwendet).",
            es: "Durante su próximo turno, si alguno de sus Pokémon activos actuales da daño a cualquier Pokémon defensor, el ataque hace 40 daños más (antes de aplicar debilidad y resistencia).",
            it: "Durante il tuo prossimo turno, se uno qualsiasi dei tuoi attuali Pokemon attivi fa danni a qualsiasi Pokemon in difesa, l'attacco fa altri 40 danni (prima di applicare debolezza e resistenza).",
            pt: "Durante o seu próximo turno, se algum dos seus Pokémon ativos atuais causarem danos a qualquer Pokémon defensivo, o ataque causar mais 40 danos (antes de aplicar fraqueza e resistência).",
          },
        },
        {
          cost: ["Water", "Lightning"],
          name: {
            en: "Dragon Song",
            ja: "ドラゴンソング",
            fr: "Chanson de dragon",
            de: "Drachenlied",
            es: "Dragon Song",
            it: "Dragon Song",
            pt: "Música de dragão",
          },
          effect: {
            en: "Each Defending Pokemon is now Asleep.",
            ja: "防御するポケモンはそれぞれ眠っています。",
            fr: "Chaque Pokémon défendant est maintenant endormi.",
            de: "Jedes verteidigende Pokemon schläft jetzt.",
            es: "Cada Pokémon defensor ahora está dormido.",
            it: "Ogni Pokemon in difesa ora dorme.",
            pt: "Cada Pokemon defensor agora está dormindo.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

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
