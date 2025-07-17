import {Card} from "../../../interfaces"
import Set from "../E1"

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

      rarity: "Uncommon",
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
            en: "If your opponent has any Benched Pokemon, he or she chooses 1 of them and switches the Defending Pokemon with it. (Do the damage before switching the Pokemon.)",
            ja: "対戦相手がベンチでポケモンを持っている場合、彼または彼女はそれらの1つを選択し、防御するポケモンをそれで切り替えます。 （ポケモンを切り替える前にダメージを与えます。）",
            fr: "Si votre adversaire a des pokémon bancés, il en choisit l'un d'entre eux et passe le Pokémon en défense avec. (Faites les dégâts avant de changer le pokemon.)",
            de: "Wenn Ihr Gegner ein Bank -Pokemon hat, wählt er oder sie 1 davon aus und wechselt das verteidigende Pokemon damit. (Führen Sie den Schaden an, bevor Sie das Pokémon wechseln.)",
            es: "Si tu oponente tiene algún Pokémon de banca, él o ella elige 1 de ellos y cambia al Pokémon defensor con él. (Haz el daño antes de cambiar el Pokémon).",
            it: "Se il tuo avversario ha dei Pokemon in panchina, ne sceglie uno e cambia il Pokemon in difesa con esso. (Fai il danno prima di cambiare il Pokemon.)",
            pt: "Se o seu oponente tiver algum Pokémon em banco, ele escolhe 1 deles e troca o Pokémon defensor com ele. (Faça o dano antes de mudar o Pokemon.)",
          },
          damage: 20,
        },
      ],


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
