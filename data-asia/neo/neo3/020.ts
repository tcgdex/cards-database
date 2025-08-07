import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Kingdra",
         ja: "キングドラ",
         fr: "Kingdra",
         de: "Kingdra",
         es: "Kingdra",
         it: "Kingdra",
         pt: "Kingdra",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [230],
      hp: 90,
      types: ["Water"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Genetic Memory",
            ja: "遺伝的記憶",
            fr: "Mémoire génétique",
            de: "Genetisches Gedächtnis",
            es: "Memoria genética",
            it: "Memoria genetica",
            pt: "Memória genética",
          },
          effect: {
            en: "Use any attack from Kingdra's Basic Pokemon card or Evolution card. (Kingdra doesn't have to pay for that attack's Energy cost.)",
            ja: "Kingdraの基本的なポケモンカードまたはEvolutionカードからの攻撃を使用してください。 （Kingdraは、その攻撃のエネルギーコストを支払う必要はありません。）",
            fr: "Utilisez toute attaque de la carte Pokémon de base de Kingdra ou de la carte d'évolution. (Kingdra n'a pas à payer pour le coût énergétique de cette attaque.)",
            de: "Verwenden Sie einen Angriff von Kingdas grundlegender Pokemon -Karte oder Evolutionskarte. (Kingdra muss die Energiekosten dieses Angriffs nicht bezahlen.)",
            es: "Use cualquier ataque de la carta o carta de evolución básica de Kingdra. (Kingdra no tiene que pagar por el costo de energía de ese ataque).",
            it: "Usa qualsiasi attacco dalla carta Pokemon di base o dalla carta evolutiva di Kingdra. (Kingdra non deve pagare per il costo energetico di quell'attacco.)",
            pt: "Use qualquer ataque do cartão Pokemon básico de Kingdra ou do cartão de evolução. (Kingdra não precisa pagar pelo custo de energia desse ataque.)",
          },
        },
        {
          cost: ["Water", "Water", "Colorless", "Colorless"],
          name: {
            en: "Twister",
            ja: "ツイスター",
            fr: "Tornade",
            de: "Twister",
            es: "Tornado",
            it: "Twister",
            pt: "Twister",
          },
          effect: {
            en: "Flip 2 coins. For each heads, choose 1 Energy card attached to the Defending Pokemon, if any, and discard it. If both are tails, this attack does nothing (not even damage).",
            ja: "2つのコインをフリップします。ヘッドごとに、ディフェンディングポケモンに添付された1枚のエネルギーカードを選択して、捨てます。両方が尾の場合、この攻撃は何もしません（損傷さえありません）。",
            fr: "Flip 2 pièces. Pour chaque tête, choisissez 1 carte d'énergie attachée au Pokémon en défense, le cas échéant, et jetez-le. Si les deux sont des queues, cette attaque ne fait rien (pas même de dégâts).",
            de: "2 Münzen umdrehen. Wählen Sie für jeden Köpfe 1 Energiekarte, die an das verteidigende Pokémon angeschlossen ist, falls vorhanden, und entsorgen Sie es. Wenn beide Schwänze sind, tut dieser Angriff nichts (nicht einmal Schaden).",
            es: "Flip 2 monedas. Para cada cabezal, elija 1 tarjeta de energía unida al Pokémon defensor, si lo hay, y descarte. Si ambas son colas, este ataque no hace nada (ni siquiera daño).",
            it: "Flip 2 monete. Per ogni testa, scegli 1 carta di energia collegata al Pokemon in difesa, se presente e scartalo. Se entrambi sono code, questo attacco non fa nulla (nemmeno danni).",
            pt: "Flip 2 moedas. Para cada cabeça, escolha 1 cartão de energia conectado ao Pokémon defensor, se houver, e descarte -o. Se ambos são caudas, esse ataque não faz nada (nem mesmo danos).",
          },
          damage: 50,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};
