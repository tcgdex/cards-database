import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Beedrill",
         ja: "beedrill",
         fr: "Beedrill",
         de: "Beedrill",
         es: "Beedrill",
         it: "Beedrill",
         pt: "Beedrill",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [15],
      hp: 80,
      types: ["Grass"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Triple Poison",
            ja: "トリプルポイズン",
            fr: "Triple poison",
            de: "Dreifachgift",
            es: "Veneno triple",
            it: "Triplo veleno",
            pt: "Veneno triplo",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Poisoned. Your opponent now puts 3 damage counters on it instead of 1 after each player's turn (even if it was already Poisoned).",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。対戦相手は、各プレイヤーのターン後に1つではなく、3つのダメージカウンターを置くようになりました（すでに毒されていたとしても）。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant empoisonné. Votre adversaire met maintenant 3 compteurs de dégâts dessus au lieu de 1 après le tour de chaque joueur (même s'il a déjà été empoisonné).",
            de: "Eine Münze drehen. Wenn Köpfe, ist das verteidigende Pokemon jetzt vergiftet. Ihr Gegner legt jetzt 3 Schadenszähler anstelle von 1 nach jedem Spieler an (auch wenn es bereits vergiftet war).",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está envenenado. Tu oponente ahora pone 3 contadores de daño en lugar de 1 después del turno de cada jugador (incluso si ya estaba envenenado).",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora avvelenato. Il tuo avversario ora mette 3 contatori di danno invece di 1 dopo il turno di ogni giocatore (anche se era già avvelenato).",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está envenenado. Seu oponente agora coloca três contadores de danos nele, em vez de 1 após a vez de cada jogador (mesmo que já tenha sido envenenada).",
          },
          damage: 10,
        },
        {
          cost: ["Grass", "Grass", "Colorless"],
          name: {
            en: "Pin Missile",
            ja: "ピンミサイル",
            fr: "Missile à épingle",
            de: "Pin -Rakete",
            es: "Misil de alfiler",
            it: "Pin missile",
            pt: "PIN míssil",
          },
          effect: {
            en: "Flip 4 coins. This attack does 20 damage times the number of heads.",
            ja: "4コインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。",
            fr: "Flip 4 pièces. Cette attaque fait 20 dégâts de temps le nombre de têtes.",
            de: "Flip 4 Münzen. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 4 monedas. Este ataque hace 20 veces el número de cabezas.",
            it: "Flip 4 monete. Questo attacco fa 20 danni il numero di teste.",
            pt: "Flip 4 moedas. Este ataque causa 20 danos vezes o número de cabeças.",
          },
        },
      ],


      variants: [
        {
          type: "holo",
        },
      ],
};
