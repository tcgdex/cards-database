import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Vaporeon - 027/088",
         ja: "Vaporeon -027/088",
         fr: "Vaporeon - 027/088",
         de: "Vaporeon - 027/088",
         es: "Vaporeon - 027/088",
         it: "Vaporeon - 027/088",
         pt: "Vaporeon - 027/088",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [134],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Self-healing",
            ja: "自己癒し",
            fr: "Auto-guérison",
            de: "Selbstheilung",
            es: "Autosanación",
            it: "Auto-guarigione",
            pt: "Auto-cicatrização",
          },
          effect: {
            en: "Whenever you attach a Water Energy card from your hand to Vaporeon, remove all Special Conditions affecting Vaporeon.",
            ja: "手からVaporeonに水エネルギーカードを取り付けるときはいつでも、Vaporeonに影響を与えるすべての特別な条件を削除します。",
            fr: "Chaque fois que vous attachez une carte d'énergie de l'eau de votre main à Vaporeon, retirez toutes les conditions spéciales affectant Vaporeon.",
            de: "Wenn Sie eine Wasserergiekarte von Ihrer Hand an Vaporeon anbringen, entfernen Sie alle besonderen Bedingungen, die Vaporeon betreffen.",
            es: "Siempre que coloque una tarjeta de energía de agua de su mano a Vaporeon, elimine todas las condiciones especiales que afectan a Vaporeon.",
            it: "Ogni volta che si collega una carta di energia idrica dalla mano a vaporeon, rimuovere tutte le condizioni speciali che colpiscono il vaporeon.",
            pt: "Sempre que você conectar um cartão de energia da água da sua mão a vaporeon, remova todas as condições especiais que afetam o Vaporeon.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Hypnosplash",
            ja: "Hypnosplash",
            fr: "Hypnosplash",
            de: "Hypnosplash",
            es: "Hipnosplash",
            it: "Ipnosplash",
            pt: "Hypnossplash",
          },
          effect: {
            en: "The Defending Pokemon is now Asleep.",
            ja: "防御ポケモンは今眠っています。",
            fr: "Le Pokémon en défense est maintenant endormi.",
            de: "Das verteidigende Pokemon schläft jetzt.",
            es: "El Pokémon defensor ahora está dormido.",
            it: "Il Pokemon in carica è ora addormentato.",
            pt: "O Pokémon atual está agora dormindo.",
          },
          damage: 10,
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Aqua Trick",
            ja: "アクアトリック",
            fr: "Aqua trick",
            de: "Aqua -Trick",
            es: "Truco de agua",
            it: "Trucco Aqua",
            pt: "Truque aqua",
          },
          effect: {
            en: "If the Defending Pokemon has any Energy cards attached to it, flip a coin. If heads, choose 1 of those Energy cards and move it to 1 of your opponent's Benched Pokemon. If your opponent has no Benched Pokemon, ignore this effect.",
            ja: "防衛ポケモンにエネルギーカードが付いている場合は、コインをひっくり返します。頭の場合は、それらのエネルギーカードの1枚を選択し、相手のベンチポケモンの1つに移動します。相手がベンチポケモンを持っていない場合は、この効果を無視してください。",
            fr: "Si le Pokémon en défense a des cartes d'énergie qui y sont attachées, retournez une pièce. Si les têtes, choisissez 1 de ces cartes d'énergie et déplacez-la vers 1 des pokemon bancés de votre adversaire. Si votre adversaire n'a pas de Pokémon banc, ignorez cet effet.",
            de: "Wenn das verteidigende Pokemon an Energiekarten angebracht ist, drehen Sie eine Münze. Wenn Sie Köpfe sind, wählen Sie 1 dieser Energiekarten und bewegen Sie es auf einen der pokémon Ihres Gegners. Wenn Ihr Gegner kein Pokémon hat, ignorieren Sie diesen Effekt.",
            es: "Si el Pokémon defensor tiene alguna tarjeta de energía unida, voltea una moneda. Si se dirige, elija 1 de esas cartas de energía y muévala a 1 de los Pokémon de banca de su oponente. Si tu oponente no tiene Pokémon en banca, ignore este efecto.",
            it: "Se il Pokemon in difesa ha delle carte di energia ad esso collegate, capovolgi una moneta. Se le teste, scegli 1 di quelle carte energetiche e spostalo su 1 del Pokemon in panchina del tuo avversario. Se il tuo avversario non ha Pokemon in panchina, ignora questo effetto.",
            pt: "Se o Pokémon atual tiver algum cartão de energia anexado a ele, vire uma moeda. Se as cabeças, escolha 1 desses cartões de energia e mova -o para 1 dos Pokémon em banco do seu oponente. Se o seu oponente não tiver Pokemon em banco, ignore esse efeito.",
          },
          damage: 40,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
