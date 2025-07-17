import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Koga's Weezing",
         ja: "コガのおしっこ",
         fr: "Le suezing de Koga",
         de: "Koga ist klein",
         es: "Weezing de Koga",
         it: "Koga's Weezing",
         pt: "Koga's Weezing",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [110],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Spontaneous Explosion",
            ja: "自発的な爆発",
            fr: "Explosion spontanée",
            de: "Spontane Explosion",
            es: "Explosión espontánea",
            it: "Esplosione spontanea",
            pt: "Explosão espontânea",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 30 more damage and Koga's Weezing does 30 damage to itself; if tails, this attack does 10 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて30ダメージを与え、コガのweezingはそれ自体に30のダメージを与えます。尾の場合、この攻撃は10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 30 dégâts supplémentaires et le suezing de Koga se fait 30 dégâts; Si Tails, cette attaque fait 10 dégâts.",
            de: "Eine Münze drehen. Wenn dieser Angriff 10 Schäden plus 30 weitere Schäden verursacht und Kogas Weezing 30 Schäden an sich selbst verursacht; Wenn Schwänze, verursacht dieser Angriff 10 Schaden.",
            es: "Voltea una moneda. Si las cabezas, este ataque hace 10 daños más 30 más de daño y Weezing de Koga hace 30 daños a sí mismo; Si Tails, este ataque hace 10 daños.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni più 30 danni in più e il wezing di Koga fa 30 danni a se stesso; Se le code, questo attacco infligge 10 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 30 mais danos e o Weezing de Koga causa 30 danos a si mesmo; Se caudas, esse ataque causa 10 danos.",
          },
        },
        {
          cost: ["Grass", "Grass", "Colorless"],
          name: {
            en: "Toxic Cloud",
            ja: "有毒な雲",
            fr: "Nuage toxique",
            de: "Giftige Wolke",
            es: "Nube tóxica",
            it: "Nuvola tossica",
            pt: "Nuvem tóxica",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Poisoned. It now takes 20 Poison damage instead of 10 after each player's turn (even if it was already Poisoned).",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。各プレイヤーのターン後（すでに毒されていたとしても）、20回ではなく20回の毒ダメージがかかります。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant empoisonné. Il faut maintenant 20 dégâts de poison au lieu de 10 après le tour de chaque joueur (même s'il était déjà empoisonné).",
            de: "Eine Münze drehen. Wenn Köpfe, ist das verteidigende Pokemon jetzt vergiftet. Nach jedem Spieler benötigt es jetzt 20 Giftschaden anstelle von 10 (auch wenn es bereits vergiftet war).",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está envenenado. Ahora requiere 20 daños por veneno en lugar de 10 después del turno de cada jugador (incluso si ya estaba envenenado).",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora avvelenato. Ora ci vogliono 20 danni al veleno invece di 10 dopo il turno di ogni giocatore (anche se era già avvelenato).",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está envenenado. Agora, são necessários 20 danos ao veneno em vez de 10 após a vez de cada jogador (mesmo que já estivesse envenenado).",
          },
          damage: 20,
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
