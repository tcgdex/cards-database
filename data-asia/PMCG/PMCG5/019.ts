import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Brock's Ninetales",
         ja: "ブロックのニネタール",
         fr: "Ninetales de Brock",
         de: "Brocks Ninetales",
         es: "Ninetales de Brock",
         it: "Brock's Ninetales",
         pt: "Ninetales de Brock",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [38],
      hp: 70,
      types: ["Fire"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Shapeshift",
            ja: "Shapeshift",
            fr: "Sapift",
            de: "Shapeshift",
            es: "Cambia",
            it: "Shapeshift",
            pt: "ShapeShift",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may attach an Evolution card from your hand to Brock's Ninetales. (This doesn't count as evolving Brock's Ninetales.) Treat Brock's Ninetales as if it were that Pokmon instead. It can't evolve, devolve, or use the Pokmon Power of that Pokmon. During your turn, you may discard the Evolution card attached to Brock's Ninetales. This power can't be used if Brock's Ninetales is Asleep, Confused, or Paralyzed. If Brock's Ninetales becomes Asleep, Confused, or Paralyzed, discard all Evolution cards attached to it.",
            ja: "順番<em>（攻撃の前に）</em> </em>になったら、手からブロックのニネタールに進化カードを添付することができます。 （これは、進化するブロックのnineTalesとしてカウントされません。）BrockのNineTalesを代わりにPokmonであるかのように扱います。そのポクモンのポクモンの力を進化させたり、委ねたり、使用したりすることはできません。ターン中、ブロックのニネタールに取り付けられた進化カードを破棄することができます。ブロックのニネタールが眠っている、混乱し、麻痺している場合、このパワーは使用できません。ブロックのニネタールが眠り、混乱、または麻痺した場合、それに取り付けられたすべての進化カードを破棄します。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez attacher une carte d'évolution de votre main aux Ninetales de Brock. (Cela ne compte pas comme les Ninetales de Brock en évolution.) Traitez les Ninetales de Brock comme si c'était ce Pokmon à la place. Il ne peut pas évoluer, dévolue ou utiliser la puissance Pokmon de ce Pokmon. Pendant votre tour, vous pouvez jeter la carte d'évolution attachée aux Ninetales de Brock. Ce pouvoir ne peut pas être utilisé si les Ninetales de Brock sont endormis, confus ou paralysés. Si les Ninetales de Brock s'endorment, confus ou paralysés, jetez toutes les cartes d'évolution qui y sont attachées.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> sind, können Sie eine Evolutionskarte von Ihrer Hand an Brocks Ninetales anbringen. (Dies gilt nicht als sich entwickelnde Brocks Ninetales.) Behandle Brocks Ninetales, als wäre es stattdessen das Pokmon. Es kann die Pokmon -Kraft dieses Pokmons nicht entwickeln, sich entwickeln oder verwenden. Während Ihres Zuges können Sie die Evolutionskarte an Brocks Ninetales verwerfen. Diese Kraft kann nicht verwendet werden, wenn Brocks Ninetales schläft, verwirrt oder gelähmt ist. Wenn Brocks Ninetales schläft, verwirrt oder gelähmt ist, entsorgen Sie alle damit verbundenen Evolutionskarten.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede adjuntar una tarjeta de evolución de su mano a los noventa de Brock. (Esto no cuenta como evolucionando los noventa de Brock). Trate a los Ninetales de Brock como si fuera ese Pokmon. No puede evolucionar, deducir o usar la potencia de Pokmon de ese Pokmon. Durante su turno, puede descartar la tarjeta de evolución adjunta a los Ninetales de Brock. Este poder no se puede usar si los Ninetales de Brock están dormidos, confundidos o paralizados. Si los Ninetales de Brock se duermen, confunden o paralizan, descarte todas las tarjetas de evolución adjuntas.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi allegare una scheda di evoluzione dalla tua mano alle ninetali di Brock. (Questo non conta come le ninetali di Brock in evoluzione.) Tratta le ninetes di Brock come se fosse invece quel Pokmon. Non può evolversi, devolvere o usare la potenza Pokmon di quel Pokmon. Durante il tuo turno, puoi scartare la scheda di evoluzione allegata alle ninetali di Brock. Questa potenza non può essere usata se Ninetales di Brock è addormentata, confusa o paralizzata. Se le ninetesi di Brock si addormentano, confuse o paralizzate, scartano tutte le carte di evoluzione attaccate ad esso.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode anexar um cartão de evolução da sua mão aos ninetales de Brock. (Isso não conta como evoluindo os ninetales de Brock.) Trate os Ninetales de Brock como se fosse esse Pokmon. Não pode evoluir, devolver ou usar o poder do Pokmon desse Pokmon. Durante o seu turno, você pode descartar o cartão de evolução anexado aos Ninetales de Brock. Esse poder não pode ser usado se os Ninetales de Brock estiverem dormindo, confusos ou paralisados. Se os ninetales de Brock ficarem dormindo, confusos ou paralisados, descartem todos os cartões de evolução anexados a ele.",
          },
      }],

      attacks: [
        {
          cost: ["Fire", "Fire"],
          name: {
            en: "Will-o'-the-wisp",
            ja: "will-o'-the-wisp",
            fr: "Will-o'-le-wisp",
            de: "Will-o'-the-wisp",
            es: "Will-o'-the-wisp",
            it: "Will-O'-The-Wisp",
            pt: "Will-o'-the-wisp",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
      ],
};
