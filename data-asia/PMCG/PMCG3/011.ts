import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Tentacool",
         ja: "Tentacool",
         fr: "Tentacool",
         de: "Tentacool",
         es: "Tentacool",
         it: "Tentacool",
         pt: "Tentacool",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [72],
      hp: 30,
      types: ["Water"],
      stage: "Basic",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Cowardice",
            ja: "臆病",
            fr: "Lâcheté",
            de: "Feigheit",
            es: "Cobardía",
            it: "Viltà",
            pt: "Covardia",
          },
          effect: {
            en: "At any time during your turn <em>(before your attack)</em>, you may return Tentacool to your hand. <em>(Discard all cards attached to Tentacool.)</em> This power can't be used the turn you put Tentacool into play or if Tentacool is affected by a Special Condition.",
            ja: "ターン<em>（攻撃の前）</em>の間はいつでも、手に触手を返すことができます。 <em>（Tentacoolに接続されたすべてのカードを捨てます。）</em>このパワーは、Tentacoolを作用させるターン、またはTentacoolが特別な状態の影響を受けている場合は使用できません。",
            fr: "À tout moment pendant votre tour <em> (avant votre attaque) </em>, vous pouvez retourner Tentacool à votre main. <em> (Jetez toutes les cartes attachées à Tentacool.) </em> Cette puissance ne peut pas être utilisée le virage que vous mettez Tentacool en jeu ou si Tentacool est affecté par une condition spéciale.",
            de: "Während Ihres Zuges (vor Ihrem Angriff) </em> können Sie jederzeit Tentacool in Ihre Hand zurückgeben. <em> (Verwerfen Sie alle Karten, die an Tentacool angeschlossen sind.) </em> Diese Kraft kann nicht verwendet werden, wenn Sie Tentacool ins Spiel bringen oder wenn Tentacool von einem besonderen Zustand betroffen ist.",
            es: "En cualquier momento durante su turno <em> (antes de su ataque) </em>, puede devolverle a Tentacool a su mano. <em> (Deseche todas las cartas adjuntas a Tentacool.) </em> Esta potencia no se puede usar el convertido de Tentacool en juego o si Tentacool se ve afectado por una condición especial.",
            it: "In qualsiasi momento durante il tuo turno <em> (prima del tuo attacco) </em>, puoi riportare Tentacool in mano. <em> (Scarta tutte le carte collegate a Tentacool.) </em> Questa potenza non può essere usata nel turno che metti in gioco Tentacool o se Tentacool è influenzato da una condizione speciale.",
            pt: "A qualquer momento durante o seu turno <em> (antes do seu ataque) </em>, você pode retornar a Tentacool à sua mão. <em> (descarte todas as cartas anexadas ao Tentacool.) </em> Essa potência não pode ser usada na curva que você colocou em jogo ou se o Tentacool for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Acid",
            ja: "酸",
            fr: "Acide",
            de: "Säure",
            es: "Ácido",
            it: "Acido",
            pt: "Ácido",
          },
          damage: 10,
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
