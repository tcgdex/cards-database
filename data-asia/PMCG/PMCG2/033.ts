import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Rhydon",
         ja: "ライドン",
         fr: "Rhydon",
         de: "Rhydon",
         es: "Rhydon",
         it: "Rhydon",
         pt: "Rhydon",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [112],
      hp: 100,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Horn Attack",
            ja: "ホーン攻撃",
            fr: "Attaque de corne",
            de: "Hornangriff",
            es: "Ataque",
            it: "Attacco del corno",
            pt: "Ataque de chifre",
          },
          damage: 30,
        },
        {
          cost: ["Fighting", "Fighting", "Fighting", "Fighting"],
          name: {
            en: "Ram",
            ja: "ラム",
            fr: "Bélier",
            de: "RAM",
            es: "RAM",
            it: "RAM",
            pt: "Bater",
          },
          effect: {
            en: "Rhydon does 20 damage to itself. Your opponent switches the Defending Pokemon with 1 of his or her Benched Pokemon, if any. (Do the damage before switching the Pokemon. Switch the Pokemon even if Rhydon is Knocked Out.)",
            ja: "Rhydonはそれ自体に20のダメージを与えます。対戦相手は、ベンチ付きポケモンの1つで防御ポケモンを切り替えます。 （ポケモンを切り替える前にダメージを与えます。Rhydonがノックアウトされていても、ポケモンを切り替えてください。）",
            fr: "Rhydon lui fait 20 dégâts. Votre adversaire change le Pokémon en défense avec un de son Pokémon banc, le cas échéant. (Faites les dégâts avant de changer le pokemon. Communiquez le Pokémon même si Rhydon est éliminé.)",
            de: "Rhydon schädigt sich 20. Ihr Gegner wechselt das verteidigende Pokémon mit einem seiner oder ihres Bankpokemon, falls vorhanden. (Führen Sie den Schaden an, bevor Sie das Pokémon wechseln. Schalten Sie das Pokémon, auch wenn Rhydon ausgeschlagen wird.)",
            es: "Rhydon hace 20 daños a sí mismo. Tu oponente cambia al Pokémon defensor con 1 de su Pokémon de banca, si es que hay alguno. (Haga el daño antes de cambiar el Pokémon. Cambie el Pokémon incluso si Rhydon es noqueado).",
            it: "Rhydon fa 20 danni a se stesso. Il tuo avversario cambia il Pokemon in difesa con 1 del suo Pokemon in panchina, se presente. (Fai il danno prima di cambiare il Pokemon. Cambia il Pokemon anche se Rhydon viene eliminato.)",
            pt: "Rhydon causa 20 danos a si mesmo. Seu oponente troca o Pokémon atual com 1 de seu Pokémon em banco, se houver. (Faça o dano antes de trocar o Pokémon. Trocne o Pokémon, mesmo que Rhydon seja nocauteado.)",
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
