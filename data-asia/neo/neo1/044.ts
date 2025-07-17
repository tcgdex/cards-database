import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Elekid",
         ja: "Elekid",
         fr: "Elekid",
         de: "Elekid",
         es: "Elekid",
         it: "Elekid",
         pt: "Elekid",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [239],
      hp: 30,
      types: ["Lightning"],
      stage: "Baby",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Playful Punch",
            ja: "遊び心のあるパンチ",
            fr: "Coup de poing",
            de: "Verspielter Schlag",
            es: "Golpe juguetón",
            it: "Punch giocoso",
            pt: "Punto brincalhão",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may flip a coin. If heads, do 20 damage to your opponent's Active Pokmon. <em>(Apply Weakness and Resistance.)</em> Either way, this ends your turn. This power can't be used if Elekid is Asleep, Confused, or Paralyzed.",
            ja: "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭の場合は、相手のアクティブなポクモンに20ダメージを与えます。 <em>（衰弱と抵抗を適用します。）</em>どちらにしても、これはあなたの番です。 Elekidが眠ったり、混乱したり、麻痺している場合、この力は使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez retourner une pièce. Si les têtes, faites 20 dégâts au Pokmon actif de votre adversaire. <em> (appliquez une faiblesse et une résistance.) </em> Dans les deux cas, cela termine votre tour. Ce pouvoir ne peut pas être utilisé si Elekid est endormi, confus ou paralysé.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> sind, können Sie eine Münze umdrehen. Wenn Sie Köpfe sind, beschädigen Sie 20 Schaden für das aktive Pokmon Ihres Gegners. <em> (Wenden Sie Schwäche und Widerstand an.) </em> In jedem Fall endet Sie an der Reihe. Diese Kraft kann nicht verwendet werden, wenn Elekid schläft, verwirrt oder gelähmt ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede voltear una moneda. Si se dirige, haga 20 daños al Pokmon activo de su oponente. <em> (aplique debilidad y resistencia.) </em> de cualquier manera, esto termina su turno. Este poder no se puede usar si Elekid está dormido, confundido o paralizado.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi capovolgere una moneta. Se le teste, fai 20 danni ai Pokmon attivi del tuo avversario. <em> (Applicare debolezza e resistenza.) </em> In entrambi i casi, questo termina il tuo turno. Questo potere non può essere usato se Elekid è addormentato, confuso o paralizzato.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode virar uma moeda. Se as cabeças, causam 20 danos ao Pokmon ativo do seu oponente. <em> (aplique fraqueza e resistência.) </em> De qualquer maneira, isso termina sua vez. Esse poder não pode ser usado se Elekid estiver dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
