import {Card} from "../../../interfaces"
import Set from "../E2"

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

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [239],
      hp: 30,
      types: ["Lightning"],
      stage: "Baby",

      attacks: [
        {
          cost: ["Lightning"],
          name: {
            en: "Energy Kick",
            ja: "エネルギーキック",
            fr: "Coup de pied d'énergie",
            de: "Energiekick",
            es: "Patada de energía",
            it: "Calcio di energia",
            pt: "Kick de energia",
          },
          effect: {
            en: "Flip a coin. If heads, choose an Energy card attached to the Defending Pokemon. Your opponent moves that card to 1 of his or her other Pokemon. (If your opponent has no Benched Pokemon, this attack does nothing.)",
            ja: "コインをひっくり返します。頭の場合は、防御ポケモンに取り付けられたエネルギーカードを選択してください。相手はそのカードを他のポケモンの1つに移動します。 （相手がベンチポケモンを持っていない場合、この攻撃は何もしません。）",
            fr: "Retourner une pièce. Si les têtes, choisissez une carte d'énergie attachée au Pokémon en défense. Votre adversaire déplace cette carte à l'un de ses autres Pokémon. (Si votre adversaire n'a pas de Pokémon banc, cette attaque ne fait rien.)",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, wählen Sie eine Energiekarte, die dem verteidigenden Pokemon angebracht ist. Dein Gegner bewegt diese Karte zu einem seiner anderen Pokémon. (Wenn Ihr Gegner kein Pokémon mit Bank hat, tut dieser Angriff nichts.)",
            es: "Voltea una moneda. Si se dirige, elija una tarjeta de energía unida al Pokémon defensor. Tu oponente mueve esa carta a 1 de sus otros Pokémon. (Si tu oponente no tiene Pokémon en banca, este ataque no hace nada).",
            it: "Capovolgi una moneta. Se le teste, scegli una carta energetica collegata al Pokemon in difesa. Il tuo avversario sposta quella carta in 1 dei suoi altri Pokemon. (Se il tuo avversario non ha Pokemon in panchina, questo attacco non fa nulla.)",
            pt: "Vire uma moeda. Se as cabeças, escolha um cartão de energia anexado ao Pokémon defensor. Seu oponente move esse cartão para 1 de seu outro Pokémon. (Se o seu oponente não tiver Pokemon com bancada, esse ataque não fará nada.)",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
