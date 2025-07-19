import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Dugtrio",
         ja: "Dugtrio",
         fr: "Dugtrio",
         de: "Dugtrio",
         es: "Dugtrio",
         it: "Dugtrio",
         pt: "Dugtrio",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [51],
      hp: 70,
      types: ["Fighting"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Sand Veil",
            ja: "砂ベール",
            fr: "Voile de sable",
            de: "Sandschleier",
            es: "Velo de arena",
            it: "Velo di sabbia",
            pt: "Véu de areia",
          },
          effect: {
            en: "Prevent all damage done to your Benched PokÃ©mon by your opponent's attacks.",
            ja: "対戦相手の攻撃によってベンチされたポケモンに与えられたすべての損害を防ぎます。",
            fr: "Empêchez tous les dommages causés à vos poké bancs par les attaques de votre adversaire.",
            de: "Verhindern Sie alle Schäden an Ihrem Bank -Poké Mon von den Angriffen Ihres Gegners.",
            es: "Evite todo el daño hecho a su banca Poké Mon por los ataques de su oponente.",
            it: "Impedisci tutti i danni arrecati al tuo poké in panchina dagli attacchi del tuo avversario.",
            pt: "Evite todos os danos causados ao seu Poké de bancado pelos ataques do seu oponente.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Dig Under",
            ja: "下を掘ります",
            fr: "Creuser",
            de: "Untergräben",
            es: "Cavar debajo",
            it: "Scavare sotto",
            pt: "Escavar abaixo",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 30 damage to that Pokemon. This attack's damage isn't affected by Weakness or Resistance.",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに30のダメージを与えます。この攻撃の損傷は、脱力感や抵抗の影響を受けません。",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 30 dégâts à ce Pokémon. Les dommages de cette attaque ne sont pas affectés par la faiblesse ou la résistance.",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 30. Der Schaden dieses Angriffs ist nicht von Schwäche oder Widerstand beeinflusst.",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 30 daños a ese Pokémon. El daño de este ataque no se ve afectado por la debilidad o la resistencia.",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco infligge 30 danni a quel Pokemon. Il danno di questo attacco non è influenzato dalla debolezza o dalla resistenza.",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 30 danos a esse Pokémon. O dano desse ataque não é afetado pela fraqueza ou resistência.",
          },
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Double-edge",
            ja: "ダブルエッジ",
            fr: "À double bord",
            de: "Doppelkante",
            es: "De doble borde",
            it: "Doppio bordo",
            pt: "Dupla borda",
          },
          effect: {
            en: "Dugtrio does 10 damage to itself.",
            ja: "Dugtrioはそれ自体に10ダメージを与えます。",
            fr: "Dugtrio fait 10 dégâts à lui-même.",
            de: "Dugtrio schädigt sich 10.",
            es: "Dugtrio hace 10 daños a sí mismo.",
            it: "Dugtrio fa 10 danni a se stesso.",
            pt: "Dugtrio causa 10 danos a si mesmo.",
          },
          damage: 60,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};
