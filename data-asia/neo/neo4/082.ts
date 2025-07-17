import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Shining Tyranitar",
         ja: "輝くタイラニター",
         fr: "Tyranitar brillant",
         de: "Leuchtender Tyranitar",
         es: "Tiranitar brillante",
         it: "Shining Tyranitar",
         pt: "Tiranitar brilhante",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [248],
      hp: 80,
      types: ["Darkness"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Darkness", "Fighting", "Fighting"],
          name: {
            en: "Mountain Crush",
            ja: "マウンテンクラッシュ",
            fr: "Écrasement de la montagne",
            de: "Bergschwarm",
            es: "Aplastamiento de la montaña",
            it: "Crush di montagna",
            pt: "Paixão da montanha",
          },
          effect: {
            en: "Flip a coin until you get tails. For each heads, your opponent discards the top card from his or her deck.",
            ja: "尾がなくなるまでコインをひっくり返します。各ヘッドについて、相手は彼または彼女のデッキからトップカードを破棄します。",
            fr: "Retournez une pièce jusqu'à ce que vous obteniez la queue. Pour chaque tête, votre adversaire rejette la carte supérieure de son deck.",
            de: "Drehen Sie eine Münze um, bis Sie Schwänze bekommen. Für jeden Köpfe verwirft Ihr Gegner die Top -Karte von seinem Deck.",
            es: "Voltea una moneda hasta que obtengas colas. Para cada cabeza, tu oponente descarta la carta superior de su mazo.",
            it: "Capovolgi una moneta fino a quando non ricevi la coda. Per ogni testa, il tuo avversario scarta la carta superiore dal suo mazzo.",
            pt: "Vire uma moeda até obter caudas. Para cada cabeça, seu oponente descarta a carta de primeira linha do baralho.",
          },
          damage: 30,
        },
        {
          cost: ["Darkness", "Fire", "Fire", "Fire"],
          name: {
            en: "Destructive Fire",
            ja: "破壊的な火",
            fr: "Feu destructeur",
            de: "Destruktives Feuer",
            es: "Fuego destructivo",
            it: "Fuoco distruttivo",
            pt: "Fogo destrutivo",
          },
          effect: {
            en: "Flip a coin for each Fire Energy card attached to Shining Tyranitar. For each heads, discard a Fire Energy card attached to Shining Tyranitar or this attack does nothing. Then, for each heads, choose an Energy card attached to the Defending Pokemon and discard it. If it has fewer Energy cards than that, discard all of them.",
            ja: "輝くタイラニターに取り付けられた各火エネルギーカードのコインをひっくり返します。それぞれの頭について、輝くタイラニターに取り付けられた消防エネルギーカードを捨てるか、この攻撃は何もしません。次に、ヘッドごとに、防御ポケモンに取り付けられたエネルギーカードを選択して廃棄します。それよりも少ないエネルギーカードがある場合は、それらすべてを捨ててください。",
            fr: "Retournez une pièce de monnaie pour chaque carte d'énergie de feu attachée à Tyranitar brillant. Pour chaque tête, jetez une carte d'énergie de feu attachée à Tyranitar brillant ou cette attaque ne fait rien. Ensuite, pour chaque tête, choisissez une carte d'énergie attachée au Pokémon en défense et jetez-le. S'il a moins de cartes d'énergie que cela, jetez tous.",
            de: "Drehen Sie eine Münze für jede Feuerergiekarte, die an glänzendem Tyranitar angebracht ist. Für jeden Köpfe entsorgen Sie eine Brandenergiekarte, die mit dem glänzenden Tyranitar angebracht ist, oder dieser Angriff tut nichts. Wählen Sie dann für jeden Köpfe eine an das verteidigende Pokemon angeschlossene Energiekarte aus und verwerfen Sie sie. Wenn es weniger Energiekarten gibt, entsorgen Sie sie alle.",
            es: "Voltee una moneda para cada tarjeta de energía de fuego unida a la tiranitar brillante. Para cada cabezal, deseche una carta de energía de fuego unida a un tiranitar brillante o este ataque no hace nada. Luego, para cada cabezal, elija una tarjeta de energía unida al Pokémon defensor y deséchela. Si tiene menos tarjetas de energía que eso, deséchelos todas.",
            it: "Capovolgi una moneta per ogni carta di energia di fuoco attaccata a Tyranitar splendente. Per ogni testa, scartare una carta di energia di fuoco attaccata a Tyranitar brillante o questo attacco non fa nulla. Quindi, per ogni testa, scegli una carta di energia collegata al Pokemon in difesa e scartalo. Se ha meno carte energetiche di così, scartarle tutte.",
            pt: "Vire uma moeda para cada cartão de energia de incêndio preso a Tyranitar brilhante. Para cada cabeças, descarte um cartão de energia de incêndio ligado a Tyranitar brilhante ou esse ataque não faz nada. Em seguida, para cada cabeça, escolha um cartão de energia conectado ao Pokémon atual e descarte -o. Se tiver menos cartões de energia do que isso, descarte todos eles.",
          },
          damage: 50,
        },
      ],

      retreat: 3,

};
