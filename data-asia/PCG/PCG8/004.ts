import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Celebi Star",
         ja: "セレビの星",
         fr: "Star de celebi",
         de: "Celebi Star",
         es: "Estrella de Celebi",
         it: "Celebi Star",
         pt: "Celebi Star",
      },

      rarity: "Shiny rare",
      category: "Pokemon",
      dexId: [251],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Time Travel",
            ja: "タイムトラベル",
            fr: "Voyage dans le temps",
            de: "Zeitreisen",
            es: "Viaje en el tiempo",
            it: "Viaggio nel tempo",
            pt: "Viagem no tempo",
          },
          effect: {
            en: "If Celebi {{Star|this PokÃ©mon}} would be Knocked Out by damage from an opponent's attack, you may flip a coin. If heads, Celebi {{Star|this PokÃ©mon}} is not Knocked Out, discard all cards attached to Celebi {{Star|this PokÃ©mon}}, and put Celebi {{Star|this PokÃ©mon}} on the bottom of your deck.",
            ja: "セレビ{{星|このポカン}}が相手の攻撃による損傷によってノックアウトされると、コインをひっくり返すことができます。ヘッドの場合、セレビ{{星|このポカンモン}}はノックアウトされておらず、セレビに取り付けられたすべてのカードを破棄します{{star | thispokã©mon}}、そしてデッキの下にセレビ{{star | thispokã©mon}}を置きます。",
            fr: "Si celebi {{Star | Ce pokã © mon}} serait éliminé par les dommages de l'attaque d'un adversaire, vous pouvez retourner une pièce. Si les têtes, celebi {{star | ce pokã © mon}} n'est pas éliminé, jette toutes les cartes attachées à celebi {{star | ce pokã © mon}}, et mettez celebi {{star | ce pokã © mon}} au bas de votre pont.",
            de: "Wenn Celebi {{star | dieser Poké © mon}} durch Schäden durch den Angriff eines Gegners ausgeschaltet wird, können Sie eine Münze umdrehen. Wenn Köpfe, Celebi {{Stern | Dieser Poké © mon}} wird nicht ausgeschlagen, entsorgen Sie alle Karten, die an Celebi {{star | dieser Poké © mon}} angehängt sind, und legen Sie Celebi {{star | this Poké mon}} auf den Boden Ihres Decks.",
            es: "Si Celebi {{Star | This Poké Mon}} sería noqueado por el daño del ataque de un oponente, puede voltear una moneda. Si las cabezas, Celebi {{Star | This Poké Mon}} no se eliminan, deseche todas las cartas adjuntas a Celebi {{Star | This Poké Mon}}, y ponga Celebi {{Star | This Pokã © Mon}} en la parte inferior de su mazo.",
            it: "Se Celebi {{star | questo poké mon}} verrebbe eliminato dal danno da un attacco di un avversario, puoi capovolgere una moneta. Se heads, celebi {{star | questo poké mon}} non viene eliminato, scartare tutte le carte attaccate a celebi {{star | questo poké mon}} e metti Celebi {{Star | questo Pok © mon}} sul fondo del tuo mazzo.",
            pt: "Se Celebi {{Star | este Poké Mon}} seria nocauteado por danos causados pelo ataque de um oponente, você pode virar uma moeda. Se as cabeças, celebi {{star | este poké Mon}} não é nocauteado, descarte todas as cartas anexadas a celebi {{star | this Poké Mon}} e coloque celebi {{star | this Poké © mon} no fundo do seu deck.",
          },
      }],

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Leaf Shade",
            ja: "葉の色合い",
            fr: "Ombre",
            de: "Blattschatten",
            es: "Sombra",
            it: "Tonalità fogliare",
            pt: "Tom de folha",
          },
          effect: {
            en: "Count the amount of Energy attached to Celebi {{Star|this Pokemon}}. Put that many damage counters on 1 of your opponent's Pokemon.",
            ja: "セレビに付着したエネルギーの量を数えます{{星|このポケモン}}。相手のポケモンの1つに多くのダメージカウンターを置きます。",
            fr: "Comptez la quantité d'énergie attachée à Celebi {{Star | ce pokemon}}. Mettez autant de compteurs de dégâts sur le pokemon de votre adversaire.",
            de: "Zählen Sie die Menge an Energie, die an Celebi {{star | this Pokemon}} verbunden ist. Setzen Sie so viele Schadenszähler auf einen der Pokémon Ihres Gegners.",
            es: "Cuente la cantidad de energía unida a Celebi {{Star | This Pokemon}}. Ponga tantos contadores de daño en 1 de los Pokémon de tu oponente.",
            it: "Conta la quantità di energia allegata a celebi {{star | this Pokemon}}. Metti molti contatori di danno su 1 del Pokemon del tuo avversario.",
            pt: "Conte a quantidade de energia anexada ao celebi {{Star | this Pokemon}}. Coloque muitos contadores de danos em 1 dos Pokémon do seu oponente.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
