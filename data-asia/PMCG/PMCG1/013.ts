import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Nidoking",
         ja: "ニドキング",
         fr: "Nidoking",
         de: "Nidoking",
         es: "Nidoking",
         it: "Nidoking",
         pt: "Nidoking",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [34],
      hp: 90,
      types: ["Grass"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Thrash",
            ja: "スラッシュ",
            fr: "Débattre",
            de: "Thrash",
            es: "Movimiento de piernas",
            it: "Thrash",
            pt: "Thrash",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage; if tails, this attack does 30 damage and Nidoking does 10 damage to itself.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は30のダメージに加えて10ダメージを与えます。テールの場合、この攻撃は30のダメージを与え、ニドキングはそれ自体に10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 30 dégâts plus 10 dégâts supplémentaires; Si Tails, cette attaque fait 30 dégâts et Nidoking fait 10 dégâts à lui-même.",
            de: "Eine Münze drehen. Wenn Köpfe, verursacht dieser Angriff 30 Schäden plus 10 weitere Schäden; Wenn Schwänze, verursacht dieser Angriff 30 Schäden und Nidoking schädigt sich 10 Schäden an sich.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 30 daños más 10 más de daño; Si Tails, este ataque hace 30 daños y Nidoking hace 10 daños a sí mismo.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 30 danni più 10 danni in più; Se le code, questo attacco infligge 30 danni e Nidoking fa 10 danni a se stesso.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 30 danos mais 10 mais danos; Se as caudas, esse ataque causam 30 danos e Nidoking causa 10 danos a si mesmo.",
          },

        },
        {
          cost: ["Grass", "Grass", "Grass"],
          name: {
            en: "Toxic",
            ja: "有毒",
            fr: "Toxique",
            de: "Giftig",
            es: "Tóxico",
            it: "Tossico",
            pt: "Tóxico",
          },
          effect: {
            en: "The Defending Pokemon is now Poisoned. It now takes 20 Poison damage instead of 10 after each player's turn (even if it was already Poisoned).",
            ja: "防御ポケモンは現在中毒になっています。各プレイヤーのターン後（すでに毒されていたとしても）、20回ではなく20回の毒ダメージがかかります。",
            fr: "Le Pokémon en défense est maintenant empoisonné. Il faut maintenant 20 dégâts de poison au lieu de 10 après le tour de chaque joueur (même s'il était déjà empoisonné).",
            de: "Das verteidigende Pokemon ist jetzt vergiftet. Nach jedem Spieler benötigt es jetzt 20 Giftschaden anstelle von 10 (auch wenn es bereits vergiftet war).",
            es: "El Pokémon defensor ahora está envenenado. Ahora requiere 20 daños por veneno en lugar de 10 después del turno de cada jugador (incluso si ya estaba envenenado).",
            it: "Il Pokemon in carica è ora avvelenato. Ora ci vogliono 20 danni al veleno invece di 10 dopo il turno di ogni giocatore (anche se era già avvelenato).",
            pt: "O Pokémon atual agora está envenenado. Agora, são necessários 20 danos ao veneno em vez de 10 após a vez de cada jogador (mesmo que já estivesse envenenado).",
          },
          damage: 20,
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
          subtype: "shadowless",
        },
        {
          type: "holo",
          subtype: "shadowless",
          stamp: ["1st edition"],
        },
      ],
};
