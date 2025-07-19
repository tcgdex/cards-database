import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Beldum",
         ja: "ベルダム",
         fr: "Bêler",
         de: "Beldum",
         es: "Beldum",
         it: "Beldum",
         pt: "Beldum",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [374],
      hp: 50,
      types: ["Metal"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Metal"],
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
            en: "Flip a coin. If heads, move a basic Energy card from the Defending Pokemon to another of your opponent's Pokemon. (Ignore this effect if your opponent has only 1 Pokemon.)",
            ja: "コインをひっくり返します。頭の場合は、基本的なエネルギーカードを防御ポケモンから相手のポケモンの別のポケモンに移動します。 （相手がポケモンが1つしかない場合、この効果を無視してください。）",
            fr: "Retourner une pièce. Si les têtes, déplacez une carte d'énergie de base du Pokémon en défense à un autre Pokémon de votre adversaire. (Ignorez cet effet si votre adversaire n'a qu'un seul Pokémon.)",
            de: "Eine Münze drehen. Wenn Sie Köpfe sind, bewegen Sie eine grundlegende Energiekarte vom verteidigenden Pokémon zu einem anderen Pokemon Ihres Gegners. (Ignorieren Sie diesen Effekt, wenn Ihr Gegner nur 1 Pokemon hat.)",
            es: "Voltea una moneda. Si se dirige, mueva una tarjeta de energía básica del Pokémon defensor a otro Pokémon de tu oponente. (Ignora este efecto si tu oponente tiene solo 1 Pokémon).",
            it: "Capovolgi una moneta. Se la testa, sposta una scheda energetica di base dal Pokemon in difesa a un altro Pokemon del tuo avversario. (Ignora questo effetto se il tuo avversario ha solo 1 Pokemon.)",
            pt: "Vire uma moeda. Se as cabeças, mova um cartão de energia básico do Pokémon atual para outro Pokémon do seu oponente. (Ignore esse efeito se o seu oponente tiver apenas 1 Pokémon.)",
          },
          damage: 10,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
