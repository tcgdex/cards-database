import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Smeargle",
         ja: "Smeargle",
         fr: "Tracas",
         de: "Schmierer",
         es: "Manchar",
         it: "Smalgle",
         pt: "Smeargle",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [235],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Sketch",
            ja: "スケッチ",
            fr: "Esquisser",
            de: "Skizzieren",
            es: "Bosquejo",
            it: "Schizzo",
            pt: "Esboço",
          },
          effect: {
            en: "If the Defending Pokemon attacked last turn, and Smeargle was in play during that attack, Smeargle copies that attack except for its Energy costs and anything else required in order to use that attack.",
            ja: "防御するポケモンが最後のターンを攻撃し、その攻撃中にSmeargleがプレイ中だった場合、その攻撃を除いて、その攻撃を除いてその攻撃をSmeargleで攻撃するために必要なものを除いてコピーします。",
            fr: "Si le Pokémon en défense a attaqué le dernier virage et que le frottis a été en jeu pendant cette attaque, les copies de frottis qui attaquent, à l'exception de ses coûts d'énergie et de tout ce qui est nécessaire pour utiliser cette attaque.",
            de: "Wenn das verteidigende Pokemon in der letzten Runde angegriffen hat und Sneargle während dieses Angriffs im Spiel war, kopiert SNEargle diesen Angriff mit Ausnahme der Energiekosten und alles andere, was erforderlich ist, um diesen Angriff zu verwenden.",
            es: "Si el Pokémon defensor atacó el último turno, y Smeargle estuvo en juego durante ese ataque, muelga copias que atacan, excepto por sus costos de energía y cualquier otra cosa requerida para usar ese ataque.",
            it: "Se il Pokemon in carica ha attaccato l'ultimo turno e Smeargle era in gioco durante quell'attacco, Smeargle copia quell'attacco tranne i suoi costi energetici e qualsiasi altra cosa richiesta per usare quell'attacco.",
            pt: "Se o Pokemon atual atacou a última curva e Smeargle estava em jogo durante esse ataque, cópias de manchas que atacam, exceto por seus custos de energia e qualquer outra coisa necessária para usar esse ataque.",
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
