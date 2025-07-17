import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Alakazam",
         ja: "ダークアラカザム",
         fr: "Alakazam noir",
         de: "Dark Alakazam",
         es: "Alakazam oscuro",
         it: "Dark Alakazam",
         pt: "Alakazam escuro",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [65],
      hp: 60,
      types: ["Psychic"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Psychic", "Psychic", "Colorless"],
          name: {
            en: "Teleport Blast",
            ja: "テレポートブラスト",
            fr: "Blast de téléportation",
            de: "Teleport -Explosion",
            es: "Explosión de teletransporte",
            it: "Blast di teletrasporto",
            pt: "Teleport Blast",
          },
          effect: {
            en: "You may switch Dark Alakazam with 1 of your Benched Pokemon. (Do the damage before switching the Pokemon.)",
            ja: "ベンチ付きポケモンを1枚置いて、暗いアラカザムを切り替えることができます。 （ポケモンを切り替える前にダメージを与えます。）",
            fr: "Vous pouvez changer d'allakazam foncé avec 1 de votre pokemon banc. (Faites les dégâts avant de changer le pokemon.)",
            de: "Sie können dunkle Alakazam mit 1 Ihres Bankpokémons wechseln. (Führen Sie den Schaden an, bevor Sie das Pokémon wechseln.)",
            es: "Puede cambiar de alakazam oscuro con 1 de su pokemon de banca. (Haz el daño antes de cambiar el Pokémon).",
            it: "Puoi cambiare Alakazam scuro con 1 del tuo Pokemon in panchina. (Fai il danno prima di cambiare il Pokemon.)",
            pt: "Você pode trocar de Alakazam escuro com 1 de seu Pokémon em banco. (Faça o dano antes de mudar o Pokemon.)",
          },
          damage: 30,
        },
        {
          cost: ["Psychic", "Psychic", "Psychic"],
          name: {
            en: "Mind Shock",
            ja: "マインドショック",
            fr: "Choc mental",
            de: "Geistesschock",
            es: "Meta Choque",
            it: "Shock mentale",
            pt: "Choque da mente",
          },
          effect: {
            en: "Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
            ja: "この攻撃に衰弱と抵抗を適用しないでください。 （衰弱と抵抗を適用した後に発生する他の効果はまだ起こります。）",
            fr: "N'appliquez pas la faiblesse et la résistance pour cette attaque. (Tout autre effet qui se produirait après avoir appliqué une faiblesse et une résistance se produit.)",
            de: "Wenden Sie keine Schwäche und Widerstand für diesen Angriff an. (Alle anderen Effekte, die nach der Anwendung von Schwächen und Widerstand auftreten würden.)",
            es: "No aplique debilidad y resistencia para este ataque. (Cualquier otro efecto que suceda después de aplicar debilidad y resistencia aún ocurre).",
            it: "Non applicare debolezza e resistenza per questo attacco. (Qualsiasi altro effetto che si verificherebbe dopo aver applicato la debolezza e la resistenza.)",
            pt: "Não aplique fraqueza e resistência a este ataque. (Quaisquer outros efeitos que aconteceriam após aplicar fraqueza e resistência ainda acontecem.)",
          },
          damage: 40,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
