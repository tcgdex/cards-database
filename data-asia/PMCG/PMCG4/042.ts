import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Machoke",
         ja: "暗いマチョーク",
         fr: "Machoke noir",
         de: "Dunkle Machoke",
         es: "Dark Machoke",
         it: "Machoke scuro",
         pt: "Dark Machoke",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [67],
      hp: 60,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
            en: "Drag Off",
            ja: "ドラッグします",
            fr: "Faire glisser",
            de: "Sich abziehen",
            es: "Retirarse",
            it: "Trascina",
            pt: "Arraste",
          },
          effect: {
            en: "Before doing damage, choose 1 of your opponent's Benched Pokemon and switch it with the Defending Pokemon. Do the damage to the new Defending Pokemon. This attack can't be used if your opponent has no Benched Pokemon.",
            ja: "ダメージを与える前に、対戦相手のベンチポケモンの1つを選択し、防御ポケモンに切り替えます。新しい防御ポケモンにダメージを与えます。対戦相手にベンチポケモンがない場合、この攻撃は使用できません。",
            fr: "Avant de faire des dégâts, choisissez 1 des pokemon bancés de votre adversaire et changez-le avec le Pokémon en défense. Faites les dégâts au nouveau Pokémon défendant. Cette attaque ne peut pas être utilisée si votre adversaire n'a pas de pokemon banc.",
            de: "Wählen Sie vor Schaden 1 des Pokemon Ihres Gegners und schalten Sie es mit dem verteidigenden Pokemon. Richten Sie den neuen Verteidigungs -Pokemon beschädigt. Dieser Angriff kann nicht verwendet werden, wenn Ihr Gegner kein Bank -Pokémon hat.",
            es: "Antes de hacer daño, elija 1 de los Pokémon de banca de tu oponente y cíguelo con el Pokémon defensor. Haz el daño al nuevo Pokémon defensor. Este ataque no se puede usar si tu oponente no tiene Pokémon en banca.",
            it: "Prima di fare danni, scegli 1 del Pokemon in panchina del tuo avversario e cambialo con il Pokemon in difesa. Fai il danno al nuovo Pokemon in carica. Questo attacco non può essere usato se il tuo avversario non ha Pokemon in panchina.",
            pt: "Antes de causar danos, escolha 1 do Pokémon em banco do seu oponente e trocá -lo com o Pokémon defensor. Faça os danos ao novo Pokémon defensivo. Esse ataque não pode ser usado se seu oponente não tiver Pokemon em banco.",
          },
          damage: 20,
        },
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
            en: "Knock Back",
            ja: "ノックバック",
            fr: "Repousser",
            de: "Klopfen",
            es: "Beberse",
            it: "Respingere",
            pt: "BATEIRA",
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
          damage: 30,
        },
      ],

      retreat: 2,

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
