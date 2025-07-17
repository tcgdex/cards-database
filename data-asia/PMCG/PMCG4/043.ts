import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Dugtrio",
         ja: "ダークディグトリオ",
         fr: "Dugtrio sombre",
         de: "Dunkler Dugtrio",
         es: "Dugtrio oscuro",
         it: "Dugtrio oscuro",
         pt: "Durno Dugtrio",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [51],
      hp: 50,
      types: ["Fighting"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Sinkhole",
            ja: "陥没",
            fr: "Gouffre",
            de: "Sinkloch",
            es: "Sumidero",
            it: "Sinkhole",
            pt: "Pia",
          },
          effect: {
            en: "Whenever your opponent's Active Pokmon retreats, your opponent flips a coin. If tails, this power does 20 damage to that Pokmon. <em>(Don't apply Weakness and Resistance.)</em> This power stops working while Dark Dugtrio is Asleep, Confused, or Paralyzed.",
            ja: "相手のアクティブなポクモンがリトリートするたびに、相手はコインをひっくり返します。尾の場合、このパワーはそのポクモンに20のダメージを与えます。 <em>（衰弱と抵抗を適用しないでください。）</em>このパワーは機能しなくなり、暗いDugtrioが眠っている、混乱し、麻痺しています。",
            fr: "Chaque fois que Pokmon actif de votre adversaire se retire, votre adversaire retourne une pièce. Si la queue, cette puissance fait 20 dégâts à ce Pokmon. <em> (N'appliquez pas la faiblesse et la résistance.) </em> Ce pouvoir cesse de fonctionner pendant que Dark Dugtrio est endormi, confus ou paralysé.",
            de: "Immer wenn der aktive Pokmon -Rückzug Ihres Gegners, dreht Ihr Gegner eine Münze. Wenn Schwänze, schädigt diese Kraft 20 Schäden an diesem Pokmon. <em> (wenden Sie keine Schwäche und Widerstand an.) </em> diese Kraft hört auf, während dunkler Dugtrio schläft, verwirrt oder gelähmt ist.",
            es: "Cada vez que el Pokmon activo de tu oponente se retira, tu oponente voltea una moneda. Si Tails, este poder hace 20 daños a ese Pokmon. <em> (no aplique debilidad y resistencia.) </em> Este poder deja de funcionar, mientras que Dark Dugtrio está dormido, confundido o paralizado.",
            it: "Ogni volta che il Pokmon attivo del tuo avversario si ritira, il tuo avversario lancia una moneta. Se code, questa potenza infligge 20 danni a quel Pokmon. <em> (Non applicare debolezza e resistenza.) </em> Questo potere smette di funzionare mentre Dark Dugtrio è addormentato, confuso o paralizzato.",
            pt: "Sempre que o Pokmon ativo do seu oponente recua, seu oponente vira uma moeda. Se a cauda, esse poder causa 20 danos a esse Pokmon. <em> (não aplique fraqueza e resistência.) </em> Esse poder para de funcionar enquanto Dark Dugtrio está dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Fighting"],
          name: {
            en: "Knock Down",
            ja: "ノックダウン",
            fr: "Abattre",
            de: "Niederschlagen",
            es: "Derribar",
            it: "Stendere",
            pt: "Derrubar",
          },
          effect: {
            en: "Your opponent flips a coin. If tails, this attack does 20 damage plus 20 more damage; if heads, this attack does 20 damage.",
            ja: "相手はコインをひっくり返します。テールの場合、この攻撃は20ダメージに加えて20ダメージを与えます。頭の場合、この攻撃は20ダメージを与えます。",
            fr: "Votre adversaire retourne une pièce. Si Tails, cette attaque fait 20 dégâts plus 20 dégâts supplémentaires; Si les têtes, cette attaque fait 20 dégâts.",
            de: "Ihr Gegner dreht eine Münze um. Wenn Schwänze, verursacht dieser Angriff 20 Schäden plus 20 weitere Schäden; Wenn Köpfe, verursacht dieser Angriff 20 Schaden.",
            es: "Tu oponente voltea una moneda. Si Tails, este ataque hace 20 daños más 20 más de daño; Si se dirige, este ataque hace 20 daños.",
            it: "Il tuo avversario lancia una moneta. Se code, questo attacco infligge 20 danni più 20 danni in più; Se la testa, questo attacco infligge 20 danni.",
            pt: "Seu oponente vira uma moeda. Se as caudas, esse ataque causam 20 danos mais 20 mais danos; Se as cabeças, esse ataque causará 20 danos.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
