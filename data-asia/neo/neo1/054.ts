import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Donphan",
         ja: "ドンファン",
         fr: "Donphan",
         de: "Donphan",
         es: "Donphan",
         it: "Donphan",
         pt: "Donphan",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [232],
      hp: 70,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Flail",
            ja: "フレイル",
            fr: "Fléau",
            de: "Drehfutter",
            es: "Mayal",
            it: "Flagello",
            pt: "Flail",
          },
          effect: {
            en: "Does 10 damage times the number of damage counters on Donphan.",
            ja: "ダメージ数がドンファンのダメージ数を10回ダメージします。",
            fr: "Fait 10 dégâts fois le nombre de compteurs de dégâts sur Donphan.",
            de: "Hat 10 Schadenszeiten die Anzahl der Schäden auf Donphan.",
            es: "Hace 10 veces el número de contadores de daño en Donphan.",
            it: "Fa 10 danni volte il numero di contatori di danno su Donphan.",
            pt: "10 danos vezes o número de contadores de danos em Donphan.",
          },
        },
        {
          cost: ["Fighting", "Fighting", "Fighting"],
          name: {
            en: "Rapid Spin",
            ja: "急速なスピン",
            fr: "Rotation rapide",
            de: "Schnellspin",
            es: "Giro rápido",
            it: "Spin rapido",
            pt: "Rotação rápida",
          },
          effect: {
            en: "If your opponent has any Benched Pokemon, he or she chooses 1 of them and switches it with his or her Active Pokemon, then, if you have any Benched Pokemon, you switch 1 of them with your Active Pokemon. (Do the damage before switching the Pokemon.)",
            ja: "対戦相手がベンチポケモンを持っている場合、彼または彼女はそれらの1つを選択し、アクティブなポケモンでそれを切り替え、ベンチポケモンをお持ちの場合は、アクティブなポケモンで1つを切り替えます。 （ポケモンを切り替える前にダメージを与えます。）",
            fr: "Si votre adversaire a des pokémon bancés, il en choisit l'un d'entre eux et le change avec son pokemon actif, alors, si vous avez un pokemon banc, vous changez 1 d'entre eux avec votre Pokémon actif. (Faites les dégâts avant de changer le pokemon.)",
            de: "Wenn Ihr Gegner ein Bank -Pokémon hat, wählt er oder sie 1 davon und wechselt es mit seinem aktiven Pokémon, wenn Sie ein Bank -Pokemon haben, wechseln Sie 1 davon mit Ihrem aktiven Pokémon. (Führen Sie den Schaden an, bevor Sie das Pokémon wechseln.)",
            es: "Si tu oponente tiene algún Pokémon de banca, él o ella elige 1 de ellos y lo cambia con su Pokémon activo, entonces, si tienes algún Pokémon de banca, cambias 1 de ellos con tu Pokémon activo. (Haz el daño antes de cambiar el Pokémon).",
            it: "Se il tuo avversario ha dei Pokemon in panchina, ne sceglie uno e lo cambia con il suo Pokemon attivo, quindi, se hai dei Pokemon in panchina, ne cambierai 1 con il tuo Pokemon attivo. (Fai il danno prima di cambiare il Pokemon.)",
            pt: "Se o seu oponente tiver algum Pokémon em banco, ele escolhe 1 deles e o troca com seu Pokémon ativo, então, se você tiver algum Pokémon em banco, troca 1 deles com seu Pokémon ativo. (Faça o dano antes de mudar o Pokemon.)",
          },
          damage: 50,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "normal",
        },
      ],
};
