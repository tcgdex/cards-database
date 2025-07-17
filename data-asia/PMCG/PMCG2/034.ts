import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Spearow",
         ja: "槍",
         fr: "Landeur",
         de: "Spearow",
         es: "Lanza",
         it: "Lancia",
         pt: "Spearow",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [21],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Peck",
            ja: "ペック",
            fr: "Picorer",
            de: "Picken",
            es: "Picotear",
            it: "Peck",
            pt: "Peck",
          },
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Mirror Move",
            ja: "鏡の動き",
            fr: "Déplacement du miroir",
            de: "Spiegelbewegung",
            es: "Movimiento de espejo",
            it: "Muoversi specchio",
            pt: "Move espelhado",
          },
          effect: {
            en: "If Spearow was attacked last turn, do the final result of that attack on Spearow to the Defending Pokemon.",
            ja: "Spearowが最後のターンを攻撃された場合、Spearowに対するその攻撃の最終結果を防御ポケモンに行います。",
            fr: "Si Spearow était attaqué au dernier tour, faites le résultat final de cette attaque contre Spearow au Pokémon en défense.",
            de: "Wenn Spearow in der letzten Runde angegriffen wurde, führen Sie das Endergebnis dieses Angriffs auf Spearow auf das verteidigende Pokemon aus.",
            es: "Si Spearow fue atacado el último turno, haga el resultado final de ese ataque contra Spearow al Pokémon defensor.",
            it: "Se Sperow è stato attaccato all'ultimo turno, esegui il risultato finale di quell'attacco a Spearow al Pokemon in carica.",
            pt: "Se Spearow foi atacado na última curva, faça o resultado final desse ataque a Spearow ao Pokémon atual.",
          },

        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
