import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Aerodactyl",
         ja: "アエロダクチル",
         fr: "Aérodactyle",
         de: "Aerodactyl",
         es: "Aerodactil",
         it: "Aerodattilo",
         pt: "Aerodactyl",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [142],
      hp: 60,
      types: ["Fighting"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Prehistoric Memory",
            ja: "先史時代の記憶",
            fr: "Mémoire préhistorique",
            de: "Prähistorisches Gedächtnis",
            es: "Memoria prehistórica",
            it: "Memoria preistorica",
            pt: "Memória pré -histórica",
          },
          effect: {
            en: "Whenever an Evolved Pokémon attacks <em>(even if it's your opponent's)</em>, it can use any attack from its Basic Pokémon card or any Evolution card attached to it. It still has to pay for that attack's Energy cost. This power stops working while Aerodactyl is Asleep, Confused, or Paralyzed.",
            ja: "進化したポケモン攻撃<em>（たとえ対戦相手であっても）</em> </em>はいつでも、基本的なポケモンカードまたはそれに添付された進化カードからの攻撃を使用できます。その攻撃のエネルギーコストに対してまだ支払う必要があります。このパワーは、アエロダクチルが眠っている、混乱し、麻痺している間に機能しなくなります。",
            fr: "Chaque fois qu'un Pokémon évolué attaque <em> (même si c'est celui de votre adversaire) </em>, il peut utiliser n'importe quelle attaque de sa carte Pokémon de base ou toute carte d'évolution qui lui est attachée. Il doit encore payer le coût énergétique de cette attaque. Ce pouvoir cesse de fonctionner tandis que l'aérodactyle est endormi, confus ou paralysé.",
            de: "Immer wenn ein weiterentwickelter Pokémon -Angriff <em> (auch wenn es sich um die Ihres Gegners handelt) </em> angreift, kann er einen Angriff von seiner grundlegenden Pokémon -Karte oder einer damit verbundenen Evolutionskarte verwenden. Es muss noch die Energiekosten dieses Angriffs bezahlen. Diese Kraft hört auf, während Aerodactyl schläft, verwirrt oder gelähmt ist.",
            es: "Cada vez que un Pokémon evolucionado ataca <em> (incluso si es tu oponente) </em>, puede usar cualquier ataque de su tarjeta Pokémon básica o cualquier carta de evolución adjunta a ella. Todavía tiene que pagar por el costo de energía de ese ataque. Esta potencia deja de funcionar mientras Aerodactyl está dormido, confundido o paralizado.",
            it: "Ogni volta che un Pokémon Evoluted Pokémon <em> (anche se è il tuo avversario) </em>, può usare qualsiasi attacco dalla sua carta Pokémon di base o qualsiasi scheda di evoluzione attaccata. Deve ancora pagare per il costo energetico di quell'attacco. Questa potenza smette di funzionare mentre l'aerodattil è addormentato, confuso o paralizzato.",
            pt: "Sempre que um Pokémon evoluído ataques <em> (mesmo que seja o do seu oponente) </em>, ele pode usar qualquer ataque de seu cartão Pokémon básico ou qualquer cartão de evolução anexado a ele. Ainda tem que pagar pelo custo de energia desse ataque. Esse poder para de funcionar enquanto o aerodactyl está dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Fly",
            ja: "飛ぶ",
            fr: "Voler",
            de: "Fliegen",
            es: "Volar",
            it: "Volare",
            pt: "Voar",
          },
          effect: {
            en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Aerodactyl. If tails, this attack does nothing (not even damage).",
            ja: "コインをひっくり返します。ヘッドの場合、対戦相手の次のターン中に、Aerodactylに行われる損傷を含む攻撃のすべての影響を防ぎます。尾の場合、この攻撃は何もしません（ダメージさえありません）。",
            fr: "Retourner une pièce. Si les têtes, au cours du prochain virage de votre adversaire, empêchent tous les effets des attaques, y compris les dégâts, effectués à l'aérodactyle. Si Tails, cette attaque ne fait rien (pas même de dégâts).",
            de: "Eine Münze drehen. Wenn die Köpfe während der nächsten Runde Ihres Gegners alle Auswirkungen von Angriffen, einschließlich Schäden an Aerodactyly, verhindern. Wenn Schwänze, tut dieser Angriff nichts (nicht einmal Schaden).",
            es: "Voltea una moneda. Si las cabezas, durante el próximo turno de tu oponente, evitan que todos los efectos de los ataques, incluido el daño, se hagan a Aerodactyl. Si Tails, este ataque no hace nada (ni siquiera daño).",
            it: "Capovolgi una moneta. Se le teste, durante il prossimo turno dell'avversario, impediscono a tutti gli effetti degli attacchi, inclusi i danni, fatti ad aerodattilo. Se le code, questo attacco non fa nulla (nemmeno danni).",
            pt: "Vire uma moeda. Se as cabeças, durante o próximo turno do seu oponente, impedem todos os efeitos dos ataques, incluindo danos, causados ao Aerodactyl. Se caudas, esse ataque não faz nada (nem sequer dano).",
          },
          damage: 30,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};
