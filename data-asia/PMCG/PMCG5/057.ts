import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Lt. Surge's Spearow",
         ja: "Surgeの槍中",
         fr: "Le lieutenant Spearow's Spearow",
         de: "Lt. Surge's Spearow",
         es: "Spearw del teniente Surge",
         it: "Lt. Surge's Spearhow",
         pt: "Lt. Surge's Spearow",
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
            en: "Whirlwind",
            ja: "旋風",
            fr: "Tourbillon",
            de: "Wirbelwind",
            es: "Torbellino",
            it: "Turbine",
            pt: "Turbilhão",
          },
          effect: {
            en: "If your opponent has any Benched Pokemon, he or she chooses 1 of them and switches it with the Defending Pokemon. (Do the damage before switching the Pokemon.)",
            ja: "対戦相手がベンチポケモンを持っている場合、彼または彼女はそれらの1つを選択し、防御ポケモンでそれを切り替えます。 （ポケモンを切り替える前にダメージを与えます。）",
            fr: "Si votre adversaire a des pokémon bancés, il en choisit l'un d'entre eux et le change avec le Pokémon en défense. (Faites les dégâts avant de changer le pokemon.)",
            de: "Wenn Ihr Gegner ein Bank -Pokemon hat, wählt er oder sie 1 davon aus und wechselt es mit dem verteidigenden Pokémon. (Führen Sie den Schaden an, bevor Sie das Pokémon wechseln.)",
            es: "Si tu oponente tiene algún Pokémon de banca, él o ella elige 1 de ellos y lo cambia con el Pokémon defensor. (Haz el daño antes de cambiar el Pokémon).",
            it: "Se il tuo avversario ha dei Pokemon in panchina, ne sceglie uno e lo cambia con il Pokemon in difesa. (Fai il danno prima di cambiare il Pokemon.)",
            pt: "Se o seu oponente tiver algum Pokémon em banco, ele escolhe 1 deles e o troca com o Pokémon atual. (Faça o dano antes de mudar o Pokemon.)",
          },
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Razor Wind",
            ja: "かみそりの風",
            fr: "Vent de rasoir",
            de: "Rasierender Wind",
            es: "Viento de afeitar",
            it: "Vento del rasoio",
            pt: "Vento de barbear",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing.",
            ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien.",
            de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada.",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla.",
            pt: "Vire uma moeda. Se caudas, esse ataque não faz nada.",
          },
          damage: 40,
        },
      ],


      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
