import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Dugtrio",
         ja: "Dugtrio",
         fr: "Dugtrio",
         de: "Dugtrio",
         es: "Dugtrio",
         it: "Dugtrio",
         pt: "Dugtrio",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [51],
      hp: 70,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Burrow",
            ja: "バロウ",
            fr: "Terrier",
            de: "Bau",
            es: "Madriguera",
            it: "Tana",
            pt: "Toca",
          },
          effect: {
            en: "Flip a coin. If heads, prevent all damage done by attacks to Dugtrio during your opponent's next turn. (Any other effects of attacks still happen.)",
            ja: "コインをひっくり返します。頭の場合は、相手の次のターン中にDugtrioに攻撃によって行われたすべての損害を防ぎます。 （攻撃の他の影響はまだ発生しています。）",
            fr: "Retourner une pièce. Si les têtes, empêchent tous les dégâts causés par les attaques à Dugtrio pendant le prochain tour de votre adversaire. (Tout autre effet des attaques se produit.)",
            de: "Eine Münze drehen. Wenn Sie Köpfe sind, verhindern Sie alle Schäden durch Angriffe auf Dugtrio während der nächsten Kurve Ihres Gegners. (Alle anderen Auswirkungen von Angriffen treten immer noch auf.)",
            es: "Voltea una moneda. Si se dirige, evite todo el daño causado por ataques a Dugtrio durante el próximo turno de tu oponente. (Todavía ocurren cualquier otro efecto de los ataques).",
            it: "Capovolgi una moneta. Se le teste, impediscono tutti i danni causati dagli attacchi a Dugtrio durante il turno successivo dell'avversario. (Qualsiasi altro effetto degli attacchi si verifica ancora.)",
            pt: "Vire uma moeda. Se as cabeças, impedem todos os danos causados por ataques a Dugtrio durante o próximo turno do seu oponente. (Quaisquer outros efeitos dos ataques ainda acontecem.)",
          },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Dig Under",
            ja: "下を掘ります",
            fr: "Creuser",
            de: "Untergräben",
            es: "Cavar debajo",
            it: "Scavare sotto",
            pt: "Escavar abaixo",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 30 damage to that Pokemon. Don't apply Weakness or Resistance. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに30のダメージを与えます。衰弱や抵抗を適用しないでください。 （衰弱と抵抗を適用した後に発生する他の効果はまだ起こります。）",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 30 dégâts à ce Pokémon. N'appliquez pas de faiblesse ou de résistance. (Tout autre effet qui se produirait après avoir appliqué une faiblesse et une résistance se produit.)",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 30. Wenden Sie keine Schwäche oder Widerstand an. (Alle anderen Effekte, die nach der Anwendung von Schwächen und Widerstand auftreten würden.)",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 30 daños a ese Pokémon. No aplique debilidad o resistencia. (Cualquier otro efecto que suceda después de aplicar debilidad y resistencia aún ocurre).",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco infligge 30 danni a quel Pokemon. Non applicare debolezza o resistenza. (Qualsiasi altro effetto che si verificherebbe dopo aver applicato la debolezza e la resistenza.)",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 30 danos a esse Pokémon. Não aplique fraqueza ou resistência. (Quaisquer outros efeitos que aconteceriam após aplicar fraqueza e resistência ainda acontecem.)",
          },
        },
      ],

      retreat: 1,

};
