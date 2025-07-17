import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Pidgeotto",
         ja: "ピッジット",
         fr: "Pidgeotto",
         de: "Pidgeotto",
         es: "Pidgeotto",
         it: "Pidgeotto",
         pt: "Pidgeotto",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [17],
      hp: 60,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Whirlwind",
            ja: "旋風",
            fr: "Tourbillon",
            de: "Wirbelwind",
            es: "Torbellino",
            it: "Turbine",
            pt: "Turbilhão",
          },
          effect: {
            en: "Your opponent switches the Defending Pokemon with 1 of his or her Benched Pokemon, if any. (Do the damage before switching the Pokemon.)",
            ja: "対戦相手は、ベンチ付きポケモンの1つで防御ポケモンを切り替えます。 （ポケモンを切り替える前にダメージを与えます。）",
            fr: "Votre adversaire change le Pokémon en défense avec un de son Pokémon banc, le cas échéant. (Faites les dégâts avant de changer le pokemon.)",
            de: "Ihr Gegner wechselt das verteidigende Pokémon mit einem seiner oder ihres Bankpokemon, falls vorhanden. (Führen Sie den Schaden an, bevor Sie das Pokémon wechseln.)",
            es: "Tu oponente cambia al Pokémon defensor con 1 de su Pokémon de banca, si es que hay alguno. (Haz el daño antes de cambiar el Pokémon).",
            it: "Il tuo avversario cambia il Pokemon in difesa con 1 del suo Pokemon in panchina, se presente. (Fai il danno prima di cambiare il Pokemon.)",
            pt: "Seu oponente troca o Pokémon atual com 1 de seu Pokémon em banco, se houver. (Faça o dano antes de mudar o Pokemon.)",
          },
          damage: 20,
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
            en: "If Pidgeotto was attacked last turn, do the final result of that attack on Pidgeotto to the Defending Pokemon.",
            ja: "Pidgeottoが最後のターンを攻撃された場合、Pidgeottoに対するその攻撃の最終結果を防御ポケモンに行います。",
            fr: "Si Pidgeotto a été attaqué au dernier tour, faites le résultat final de cette attaque sur Pidgeotto au Pokémon en défense.",
            de: "Wenn Pidgeotto in der letzten Runde angegriffen wurde, führen Sie das Endergebnis dieses Angriffs auf Pidgeotto auf das verteidigende Pokemon durch.",
            es: "Si Pidgeotto fue atacado en el último turno, haga el resultado final de ese ataque contra Pidgeotto al Pokémon defensor.",
            it: "Se Pidgeotto è stato attaccato all'ultimo turno, fai il risultato finale di quell'attacco a Pidgeotto al Pokemon in carica.",
            pt: "Se Pidgeotto foi atacado na última curva, faça o resultado final desse ataque a Pidgeotto ao Pokémon atual.",
          },

        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          subtype: "shadowless",
        },
        {
          type: "normal",
          subtype: "shadowless",
          stamp: ["1st edition"],
        },
      ],
};
