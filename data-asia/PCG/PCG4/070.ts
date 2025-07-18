import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Hitmonlee",
         ja: "Hitmonlee",
         fr: "Hitmonlee",
         de: "Hitmonlee",
         es: "Hitmonlee",
         it: "Hitmonlee",
         pt: "Hitmonlee",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [106],
      hp: 60,
      types: ["Fighting"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Stages of Evolution",
            ja: "進化の段階",
            fr: "Étapes de l'évolution",
            de: "Evolutionsphasen",
            es: "Etapas de evolución",
            it: "Fase dell'evoluzione",
            pt: "Estágios da evolução",
          },
          effect: {
            en: "As long as Hitmonlee is an Evolved PokÃ©mon, Hitmonlee's attacks do 20 more damage to your opponent's PokÃ©mon (before applying Weakness and Resistance).",
            ja: "Hitmonleeが進化したポカモンである限り、Hitmonlee攻撃は対戦相手のPokã©Monに20個のダメージを与えます（弱さと抵抗を適用する前）。",
            fr: "Tant que Hitmonlee est un poké évolué, les attaques de Hitmonlee font 20 dommages supplémentaires aux poké de votre adversaire (avant d'appliquer une faiblesse et une résistance).",
            de: "Solange Hitmonlee ein weiterentwickelter Poké Mon Mon ist, verursachen Hitmonlee -Angriffe 20 weitere Schäden an den Poké Mons Ihres Gegners (bevor Sie Schwäche und Widerstand anwenden).",
            es: "Mientras Hitmonlee sea un Poké Mon evolucionado, los ataques de Hitmonlee hacen 20 daños más al Poké Mon de tu oponente (antes de aplicar debilidad y resistencia).",
            it: "Finché Hitmonlee è un poké evoluto, gli attacchi di Hitmonlee fanno altri 20 danni al poké del tuo avversario (prima di applicare la debolezza e la resistenza).",
            pt: "Enquanto Hitmonlee for um Poké -Mon evoluído, os ataques de Hitmonlee causam mais 20 danos ao Poké Mon do seu oponente (antes de aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Stretch Kick",
            ja: "ストレッチキック",
            fr: "Coup de pied d'étirement",
            de: "Stretch -Kick",
            es: "Patada estirada",
            it: "Calcio allungato",
            pt: "Kick Stretch",
          },
          effect: {
            en: "Choose 1 of your opponent's Benched Pokemon. This attack does 10 damage to that Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のベンチポケモンを1つ選択します。この攻撃は、そのポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 1 des Pokémon bancés de votre adversaire. Cette attaque fait 10 dégâts à ce Pokémon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 1 der Bankpokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 10. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 1 de los Pokémon de banca de tu oponente. Este ataque hace 10 daños a ese Pokémon. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 1 del Pokemon in panchina del tuo avversario. Questo attacco fa 10 danni a quel Pokemon. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 1 do Pokémon bancado do seu oponente. Este ataque causa 10 danos a esse Pokémon. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Mega Kick",
            ja: "メガキック",
            fr: "Méga coup de pied",
            de: "Mega -Kick",
            es: "Mega patada",
            it: "Mega calcio",
            pt: "Mega chute",
          },
          damage: 40,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
