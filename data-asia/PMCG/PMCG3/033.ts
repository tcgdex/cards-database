import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Mew",
         ja: "ミュー",
         fr: "Miauler",
         de: "Miauen",
         es: "Maullar",
         it: "Miagolare",
         pt: "Mew",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [151],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Psywave",
            ja: "Psywave",
            fr: "Psywave",
            de: "Psywave",
            es: "Psíquica",
            it: "Psywave",
            pt: "Psywave",
          },
          effect: {
            en: "Does 10 damage times the number of Energy cards attached to the Defending Pokemon.",
            ja: "ディフェンディングポケモンに添付されたエネルギーカードの数を10回ダメージします。",
            fr: "Fait 10 dégâts fois le nombre de cartes d'énergie attachées au Pokémon en défense.",
            de: "Schaden Sie 10 Schadenszeiten wie die Anzahl der an das verteidigenden Pokémon angeschlossenen Energiekarten.",
            es: "Hace 10 tiempos de daño el número de tarjetas de energía unidas al Pokémon defensor.",
            it: "Fa 10 danni volte il numero di carte di energia collegate al Pokemon in difesa.",
            pt: "10 danos vezes o número de cartões de energia ligados ao pokemon defensor.",
          },

        },
        {
          cost: ["Psychic", "Psychic"],
          name: {
            en: "Devolution Beam",
            ja: "デボリューションビーム",
            fr: "Faisceau de dévolution",
            de: "Devolution Beam",
            es: "Haz de devolución",
            it: "Trave di devoluzionamento",
            pt: "Feixe de devolução",
          },
          effect: {
            en: "Choose an evolved Pokemon (your own or your opponent's). Return the highest Stage Evolution card on that Pokemon to its player's hand. That Pokemon is no longer Asleep, Confused, Paralyzed, or Poisoned, or anything else that might be the result of an attack (just as if you had evolved it).",
            ja: "進化したポケモン（あなた自身または相手）を選択してください。そのポケモンの最高ステージ進化カードをプレイヤーの手に返します。そのポケモンは、もはや眠っていない、混乱し、麻痺した、または毒されていない、または攻撃の結果である可能性のあるもの（まるであなたがそれを進化させたかのように）。",
            fr: "Choisissez un Pokémon évolué (le vôtre ou celui de votre adversaire). Renvoyez la carte d'évolution de la scène la plus élevée sur ce Pokémon à la main de son joueur. Ce Pokémon n'est plus endormi, confus, paralysé ou empoisonné, ni tout ce qui pourrait être le résultat d'une attaque (comme si vous l'aviez évolué).",
            de: "Wählen Sie ein weiterentwickeltes Pokemon (Ihr eigenes oder Ihr Gegner). Gibt die Evolutionskarte mit der höchsten Bühne auf dieses Pokémon an die Hand seines Spielers zurück. Dieses Pokémon schläft nicht mehr, verwirrt, gelähmt oder vergiftet oder etwas anderes, das das Ergebnis eines Angriffs sein könnte (als hätten Sie es entwickelt).",
            es: "Elija un Pokémon evolucionado (el tuyo o el de tu oponente). Devuelve la tarjeta de evolución del escenario más alta en ese Pokémon a la mano de su jugador. Ese Pokémon ya no está dormido, confundido, paralizado o envenenado, o cualquier otra cosa que pueda ser el resultado de un ataque (como si lo hubieras evolucionado).",
            it: "Scegli un Pokemon evoluto (il tuo o il tuo avversario). Restituisce la carta Evolution più alta su quel Pokemon sulla mano del suo giocatore. Quel Pokemon non è più addormentato, confuso, paralizzato o avvelenato, o qualsiasi altra cosa che potrebbe essere il risultato di un attacco (proprio come se lo avessi evoluto).",
            pt: "Escolha um Pokémon evoluído (o seu ou o de seu oponente). Retorne a maior carta de evolução do palco naquele pokemon à mão do jogador. Esse Pokémon não está mais dormindo, confuso, paralisado ou envenenado, ou qualquer outra coisa que possa ser o resultado de um ataque (como se você o tivesse evoluído).",
          },

        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
      ],
};
