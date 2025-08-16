import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Arbok",
         ja: "アーボック",
         fr: "Arbok",
         de: "Arbok",
         es: "Arbok",
         it: "Arbok",
         pt: "Arbok",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [24],
      hp: 60,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Terror Strike",
            ja: "テロストライキ",
            fr: "Grève terroriste",
            de: "Terrorstreik",
            es: "Huelga de terror",
            it: "Sciopero terroristico",
            pt: "Terror Strike",
          },
          effect: {
            en: "Flip a coin. If heads and if your opponent has any Benched Pokemon, he or she chooses 1 of them and switches it with the Defending Pokemon. (Do the damage before switching the Pokemon.)",
            ja: "コインをひっくり返します。頭と相手がベンチポケモンを持っている場合、彼または彼女はそれらの1つを選択し、防御ポケモンでそれを切り替えます。 （ポケモンを切り替える前にダメージを与えます。）",
            fr: "Retourner une pièce. Si les têtes et si votre adversaire a un pokemon banc, il en choisit un et le change avec le Pokémon en défense. (Faites les dégâts avant de changer le pokemon.)",
            de: "Eine Münze drehen. Wenn Köpfe und wenn Ihr Gegner ein Pokémon hat, wählt er 1 davon aus und wechselt es mit dem verteidigenden Pokemon. (Führen Sie den Schaden an, bevor Sie das Pokémon wechseln.)",
            es: "Voltea una moneda. Si se dirige y si tu oponente tiene algún Pokémon de banca, él o ella elige 1 de ellos y lo cambia con el Pokémon defensor. (Haz el daño antes de cambiar el Pokémon).",
            it: "Capovolgi una moneta. Se la testa e se il tuo avversario ha dei Pokemon in panchina, ne sceglie uno e lo cambia con il Pokemon in difesa. (Fai il danno prima di cambiare il Pokemon.)",
            pt: "Vire uma moeda. Se as cabeças e se o seu oponente tiver algum Pokémon em banco, ele escolhe 1 deles e o troca com o Pokémon atual. (Faça o dano antes de mudar o Pokemon.)",
          },
          damage: 10,
        },
        {
          cost: ["Grass", "Grass", "Colorless"],
          name: {
            en: "Poison Fang",
            ja: "毒の牙",
            fr: "Croc de poison",
            de: "Gift Fang",
            es: "Colmillo de veneno",
            it: "Veleno",
            pt: "Poison Fang",
          },
          effect: {
            en: "The Defending Pokemon is now Poisoned.",
            ja: "防御ポケモンは現在中毒になっています。",
            fr: "Le Pokémon en défense est maintenant empoisonné.",
            de: "Das verteidigende Pokemon ist jetzt vergiftet.",
            es: "El Pokémon defensor ahora está envenenado.",
            it: "Il Pokemon in carica è ora avvelenato.",
            pt: "O Pokémon atual agora está envenenado.",
          },
          damage: 20,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
