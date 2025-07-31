import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Magnemite",
         ja: "マグナイト",
         fr: "Magnémite",
         de: "Magnemit",
         es: "Magnemita",
         it: "Magnemite",
         pt: "Magnemita",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [81],
      hp: 40,
      types: ["Metal"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Lock-on",
            ja: "ロックオン",
            fr: "Verrouillage",
            de: "Sperren",
            es: "Bloqueo",
            it: "Blocco",
            pt: "Bloqueio",
          },
          effect: {
            en: "During your next turn, treat any tails flipped when using Magnemite's Electric Bolt attack on the Defending Pokemon as if they were heads. (Benching or evolving either Pokemon ends this effect.)",
            ja: "次のターン中に、マグネミテの電気ボルト攻撃を防御ポケモンに使用して頭が頭であるかのように尾を繰り返した尾を治療します。 （どちらかのポケモンがこの効果を終了するか、ベンチまたは進化します。）",
            fr: "Au cours de votre prochain tour, traitez toutes les queues inversées lorsque vous utilisez l'attaque de boulon électrique de la magnémite sur le Pokémon en défense comme s'il s'agissait de têtes. (Benching ou évolution de Pokémon termine cet effet.)",
            de: "Behandeln Sie während Ihrer nächsten Kurve alle Schwänze, die umgedreht werden, wenn Sie den Elektroschraubenangriff von Magnemite auf das verteidigende Pokémon verwenden, als wären sie Köpfe. (BENCHING oder EVOLING ENDERUNG POKEMON beendet diesen Effekt.)",
            es: "Durante su próximo turno, trate cualquier cola volteada cuando use el ataque de perno eléctrico de Magnemite en el Pokémon defensor como si fueran cabezas. (Benching o evolucionando o Pokémon termina este efecto).",
            it: "Durante il turno successivo, tratta qualsiasi coda capovolta quando si utilizza l'attacco di bulloni elettrici di Magnemite sul Pokemon in difesa come se fossero teste. (Panca o evolvendo Pokemon termina questo effetto.)",
            pt: "Durante o seu próximo turno, trate as caudas que viram ao usar o ataque de parafuso elétrico da Magnemite no Pokémon defensor como se fossem cabeças. (Bancho ou evolução de Pokemon termina esse efeito.)",
          },
        },
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Electric Bolt",
            ja: "電気ボルト",
            fr: "Boulon électrique",
            de: "Elektrischer Bolzen",
            es: "Perno eléctrico",
            it: "Bullone elettrico",
            pt: "Parafuso elétrico",
          },
          effect: {
            en: "Flip 2 coins. If both are heads, the Defending Pokemon is now Paralyzed. If either of them is tails, this attack does nothing (not even damage).",
            ja: "2つのコインをフリップします。両方がヘッドである場合、防御するポケモンは現在麻痺しています。どちらかが尾の場合、この攻撃は何もしません（損傷さえありません）。",
            fr: "Flip 2 pièces. Si les deux sont des têtes, le Pokémon en défense est maintenant paralysé. Si l'un ou l'autre est la queue, cette attaque ne fait rien (pas même de dégâts).",
            de: "2 Münzen umdrehen. Wenn beide Köpfe sind, ist das verteidigende Pokémon jetzt gelähmt. Wenn einer von ihnen Schwänze ist, tut dieser Angriff nichts (nicht einmal Schaden).",
            es: "Flip 2 monedas. Si ambos son cabezas, el Pokémon defensor ahora está paralizado. Si cualquiera de ellos es Tails, este ataque no hace nada (ni siquiera daños).",
            it: "Flip 2 monete. Se entrambi sono teste, il Pokemon in carica è ora paralizzato. Se uno di essi è coda, questo attacco non fa nulla (nemmeno danni).",
            pt: "Flip 2 moedas. Se ambos são cabeças, o Pokémon atual agora está paralisado. Se qualquer um deles for cauda, esse ataque não faz nada (nem mesmo danos).",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
      ],
};
