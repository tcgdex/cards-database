import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Magnemite",
         ja: "マグナイト",
         fr: "Magnémite",
         de: "Magnemit",
         es: "Magnemita",
         it: "Magnemite",
         pt: "Magnemita",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [81],
      hp: 40,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Thunder Wave",
            ja: "サンダーウェーブ",
            fr: "Vague de tonnerre",
            de: "Donnerwelle",
            es: "Trueno",
            it: "Onda del tuono",
            pt: "Thunder Wave",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
        },
        {
          cost: ["Lightning"],
          name: {
            en: "Magnetic Lines",
            ja: "磁気線",
            fr: "Lignes magnétiques",
            de: "Magnetleitungen",
            es: "Líneas magnéticas",
            it: "Linee magnetiche",
            pt: "Linhas magnéticas",
          },
          effect: {
            en: "If the Defending Pokemon has any basic Energy cards attached to it, flip a coin. If heads, choose 1 of those Energy cards and move it to 1 of your opponent's Benched Pokemon. If your opponent has no Benched Pokemon, ignore this effect.",
            ja: "防衛ポケモンに基本的なエネルギーカードが付いている場合は、コインをひっくり返します。頭の場合は、それらのエネルギーカードの1枚を選択し、相手のベンチポケモンの1つに移動します。相手がベンチポケモンを持っていない場合は、この効果を無視してください。",
            fr: "Si le Pokémon en défense a des cartes d'énergie de base qui y sont attachées, retournez une pièce. Si les têtes, choisissez 1 de ces cartes d'énergie et déplacez-la vers 1 des pokemon bancés de votre adversaire. Si votre adversaire n'a pas de Pokémon banc, ignorez cet effet.",
            de: "Wenn das verteidigende Pokémon grundlegende Energiekarten mit sich bringt, drehen Sie eine Münze um. Wenn Sie Köpfe sind, wählen Sie 1 dieser Energiekarten und bewegen Sie es auf einen der pokémon Ihres Gegners. Wenn Ihr Gegner kein Pokémon hat, ignorieren Sie diesen Effekt.",
            es: "Si el Pokémon defensor tiene alguna tarjeta de energía básica unidas, voltea una moneda. Si se dirige, elija 1 de esas cartas de energía y muévala a 1 de los Pokémon de banca de su oponente. Si tu oponente no tiene Pokémon en banca, ignore este efecto.",
            it: "Se il Pokemon in difesa ha delle carte di energia di base collegate ad esso, capovolgi una moneta. Se le teste, scegli 1 di quelle carte energetiche e spostalo su 1 del Pokemon in panchina del tuo avversario. Se il tuo avversario non ha Pokemon in panchina, ignora questo effetto.",
            pt: "Se o Pokémon atual tiver algum cartão de energia básico anexado a ele, vire uma moeda. Se as cabeças, escolha 1 desses cartões de energia e mova -o para 1 dos Pokémon em banco do seu oponente. Se o seu oponente não tiver Pokemon em banco, ignore esse efeito.",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
