import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Politoed",
         ja: "政治",
         fr: "Polito",
         de: "Politisch",
         es: "Político",
         it: "Politoed",
         pt: "Político",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [186],
      hp: 100,
      types: ["Water"],
      stage: "Stage2",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Frog Song",
            ja: "カエルの歌",
            fr: "Chant de grenouille",
            de: "Froschlied",
            es: "Canción de rana",
            it: "Canzone di rana",
            pt: "Música de sapo",
          },
          effect: {
            en: "Whenever Politoed's attack damages the Defending Pokmon <em>(after applying Weakness and Resistance)</em>, if there are more than 3 Poliwags, Poliwhirls, Poliwraths, and/or Politoeds in play <em>(including your opponent's)</em>, that attack does 40 more damage (no matter how many heads you get). This power stops working while Politoed is Asleep, Confused, or Paralyzed.",
            ja: "Politoedの攻撃が防御するPokmon <em>（衰弱と抵抗を適用した後）</em>に損害を与えるときはいつでも、3つ以上のポリワグ、ポリハール、ポリワラス、および/または政治<em>を含む<em>を含む）</em>、攻撃は40以上のダメージを与えます（このパワーは、政治が眠っている、混乱し、麻痺している間に機能しなくなります。",
            fr: "Chaque fois que l'attaque de Politoed endommage le Pokmon en défense <em> (après avoir appliqué la faiblesse et la résistance) </em>, s'il y a plus de 3 poliwags, polihirls, poliwraths et / ou polito dans le jeu <em> (y compris celle de votre adversaire) </em>, cette attaque fait 40 dégâts (quel que soit le nombre de têtes que vous obtenez). Ce pouvoir cesse de fonctionner pendant que Politoed est endormi, confus ou paralysé.",
            de: "Immer wenn Politoeds Angriff den verteidigenden Pokmon <em> (nach Antrag auf Schwäche und Widerstand) </em> schadet, wenn es mehr als 3 Poliwags, Poliwhirls, Poliwraths und/oder Polito -Poli -Poli -Spiele in Spielen gibt <em> (einschließlich der Ihres Gegners) </em>, dieser Angriff hat 40 mehr Schaden (ohne wie viele Köpfe, die Sie bekommen). Diese Macht hört auf, während politisch zu arbeiten, schläft, verwirrt oder gelähmt.",
            es: "Cada vez que el ataque de Politoed daña al Pokmon defensor <em> (después de aplicar debilidad y resistencia) </em>, si hay más de 3 poliwags, poliwhirls, poliwraths y/o politos en juego <em> (incluidos los oponentes) </em>, que ataca 40 más daño (no importa cuántos cabezas obtengas). Este poder deja de funcionar mientras está político está dormido, confundido o paralizado.",
            it: "Ogni volta che l'attacco di Polotoed danneggia il Pokmon in carica <em> (dopo aver applicato la debolezza e la resistenza) </em>, se ci sono più di 3 poliwag, poliwhirls, poli e/o politici in gioco <em> (compreso il tuo avversario) </em>, quell'attacco fa più di 40 danni (non importa quante testa). Questo potere smette di funzionare mentre Politod è addormentato, confuso o paralizzato.",
            pt: "Sempre que o ataque do Politoed prejudica o defesa do Pokmon <em> (depois de aplicar fraqueza e resistência) </em>, se houver mais de três poliwags, poliwhirls, poliwaths e/ou politosos em jogo <em> (incluindo o seu oponente) </em>, esse ataque causa mais 40 danos (não há muitos níveis. Esse poder para de funcionar enquanto político está dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Water", "Colorless", "Colorless"],
          name: {
            en: "Doubleslap",
            ja: "doubleslap",
            fr: "Double",
            de: "Doppelklappe",
            es: "Duplana",
            it: "Doppbleslap",
            pt: "Doubleslap",
          },
          effect: {
            en: "Flip 2 coins. This attack does 40 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の40回のダメージ倍になります。",
            fr: "Flip 2 pièces. Cette attaque fait 40 dégâts de temps le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 40 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 40 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 40 danni il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 40 danos vezes o número de cabeças.",
          },
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
        },
      ],
};
