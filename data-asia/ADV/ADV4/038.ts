import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Regice ex",
         ja: "Regice Ex",
         fr: "Régice ex",
         de: "Regice Ex",
         es: "Regice ex",
         it: "Regice Ex",
         pt: "Regice Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [378],
      hp: 90,
      types: ["Water"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Crystal Body",
            ja: "クリスタルボディ",
            fr: "Corps cristallin",
            de: "Kristallkörper",
            es: "Cuerpo de cristal",
            it: "Corpo cristallino",
            pt: "Corpo cristalino",
          },
          effect: {
            en: "Prevent all effects of attacks, except damage, done to Regice ex by the Attacking PokÃ©mon.",
            ja: "攻撃ポケモンによって誘導Exに与えられた損傷を除く攻撃のすべての影響を防ぎます。",
            fr: "Empêchez tous les effets des attaques, à l'exception des dégâts, régis pour régice ex par les poké attaquants.",
            de: "Verhindern Sie alle Auswirkungen von Angriffen, mit Ausnahme von Schäden, die an Regice EX durch den angreifenden Poké Mon mon angerichtet wurden.",
            es: "Evite todos los efectos de los ataques, excepto el daño, realizado al Regice EX por el Poké Mon.",
            it: "Prevenire tutti gli effetti degli attacchi, ad eccezione del danno, fatto a Regice ex da parte dell'attacco Poké mon.",
            pt: "Evite todos os efeitos dos ataques, exceto danos, causados a Regice EX pelo ataque de ataque.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Water", "Colorless"],
          name: {
            en: "Freeze Lock",
            ja: "フリーズロック",
            fr: "Verrouillage de congélation",
            de: "Gefrierschloss",
            es: "Lock de congelación",
            it: "Blocco di congelamento",
            pt: "Frega de congelamento",
          },
          effect: {
            en: "Flip a coin. If heads, your opponent can't attach Energy cards from his or her hand to the Defending Pokemon during his or her next turn.",
            ja: "コインをひっくり返します。頭の場合、対戦相手は次のターン中に自分の手から防御ポケモンにエネルギーカードを取り付けることができません。",
            fr: "Retourner une pièce. Si les têtes, votre adversaire ne peut pas attacher des cartes d'énergie de sa main au Pokémon en défense lors de son prochain tour.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, kann Ihr Gegner während seiner nächsten Kurve keine Energiekarten von seiner Hand an das verteidigende Pokemon anbringen.",
            es: "Voltea una moneda. Si se dirige, tu oponente no puede adjuntar cartas de energía de su mano al Pokémon defensor durante su próximo turno.",
            it: "Capovolgi una moneta. Se la testa, il tuo avversario non può attaccare le carte di energia dalla sua mano al Pokemon in carica durante il suo prossimo turno.",
            pt: "Vire uma moeda. Se as cabeças, seu oponente não poderá anexar cartas de energia da mão dele ao pokemon atual durante o próximo turno.",
          },
          damage: 60,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
