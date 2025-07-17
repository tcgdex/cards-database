import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Igglybuff",
         ja: "Igglybuff",
         fr: "Igglybuff",
         de: "IgglyBuff",
         es: "Igglybuff",
         it: "Igglybuff",
         pt: "IgglyBuff",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [174],
      hp: 30,
      types: ["Colorless"],
      stage: "Baby",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Gaze",
            ja: "視線",
            fr: "Regard",
            de: "Blick",
            es: "Mirada",
            it: "Sguardo",
            pt: "Olhar",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, choose 1 of your opponent's Benched Pokmon that has a Pokmon Power. That power stops working until the end of this turn. This effect ends if that Pokmon leaves the Bench.",
            ja: "ターン中に<em>（攻撃の前）</em> </em>、ポクモンパワーを持つ相手のベンチ付きポッコンを1つ選択します。そのパワーは、このターンの終わりまで機能しなくなります。この効果は、そのポクモンがベンチを離れると終了します。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, choisissez 1 du pokmon banc de votre adversaire qui a une puissance de pokmon. Cette puissance cesse de fonctionner jusqu'à la fin de ce tour. Cet effet se termine si ce Pokmon quitte le banc.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> sind, wählen Sie 1 der pokmon Ihres Gegners mit einem Pokmon -Power Ihres Gegners aus. Diese Kraft hört auf, bis zum Ende dieser Runde zu arbeiten. Dieser Effekt endet, wenn dieses Pokmon die Bank verlässt.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, elija 1 de los pokmon de banca de su oponente que tenga un poder de Pokmon. Esa potencia deja de funcionar hasta el final de este turno. Este efecto termina si ese Pokmon deja el banco.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, scegli 1 dei Pokmon in panchina del tuo avversario che ha una potenza di Pokmon. Quel potere smette di funzionare fino alla fine di questo turno. Questo effetto termina se quel Pokmon lascia la panchina.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, escolha 1 do Pokmon do seu oponente, que tem um poder de Pokmon. Esse poder para de funcionar até o final deste turno. Este efeito termina se esse Pokmon deixar o banco.",
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
