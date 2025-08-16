import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Unown C",
         ja: "c",
         fr: "Unwn",
         de: "Unown c",
         es: "Sin OSD C",
         it: "Unown c",
         pt: "Unwnow c",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [201],
      hp: 40,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "CHASE [Chase]",
            ja: "チェイス[チェイス]",
            fr: "Chase [Chase]",
            de: "Chase [Chase]",
            es: "Chase [persecución]",
            it: "Chase [Chase]",
            pt: "Chase [Chase]",
          },
          effect: {
            en: "As long as Unown [C] is your Active Pokmon, whenever your opponent's Active Pokmon tries to retreat, flip a coin. If heads, put 1 damage counter on that Pokmon. Apply Weakness and Resistance.",
            ja: "[c]がアクティブなポクモンである限り、相手のアクティブなポクモンが退却しようとするたびに、コインをひっくり返します。頭の場合は、そのポクモンに1つのダメージカウンターを入れます。衰弱と抵抗を適用します。",
            fr: "Tant que non-bas [C] est votre pokmon actif, chaque fois que le pokmon actif de votre adversaire essaie de reculer, retournez une pièce. Si les têtes, mettez 1 compteur de dégâts sur ce pokmon. Appliquer une faiblesse et une résistance.",
            de: "Solange Unown [C] Ihr aktives Pokmon ist, wenn der aktive Pokmon Ihres Gegners versucht, sich zurückzuziehen, drehen Sie eine Münze. Wenn Sie Köpfe haben, legen Sie diesen Pokmon 1 Schadenschalter. Schwäche und Widerstand auftragen.",
            es: "Mientras Unwown [C] sea tu Pokmon activo, cada vez que el Pokmon activo de tu oponente intenta retirarse, voltea una moneda. Si se dirige, coloque 1 contador de daño en ese Pokmon. Aplicar debilidad y resistencia.",
            it: "Fintanto che Unown [C] è il tuo Pokmon attivo, ogni volta che il Pokmon attivo del tuo avversario cerca di ritirarsi, capovolgi una moneta. Se le teste, metti 1 contatore di danni su quel Pokmon. Applicare debolezza e resistenza.",
            pt: "Enquanto o UNOWN [C] for o seu Pokmon ativo, sempre que o Pokmon ativo do seu oponente tenta recuar, vire uma moeda. Se as cabeças, coloque 1 balcão de dano nesse Pokmon. Aplique fraqueza e resistência.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Hidden Power",
            ja: "隠された力",
            fr: "Pouvoir caché",
            de: "Versteckte Kraft",
            es: "Poder oculto",
            it: "Potere nascosto",
            pt: "Poder oculto",
          },
          damage: 10,
        },
      ],

      retreat: 1,

};
