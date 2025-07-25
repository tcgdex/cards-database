import {Card} from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Crawdaunt",
         ja: "クローダント",
         fr: "Dresseur",
         de: "Crawdaunt",
         es: "Crawdaunt",
         it: "Crawdaunt",
         pt: "Crawdaunt",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [342],
      hp: 70,
      types: ["Darkness"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Dark Protection",
            ja: "暗い保護",
            fr: "Protection sombre",
            de: "Dunkler Schutz",
            es: "Protección oscura",
            it: "Protezione oscura",
            pt: "Proteção escura",
          },
          effect: {
            en: "Any damage done to Crawdaunt by your opponent's attacks is reduced by 10 for each Darkness attached to Crawdaunt (after applying Weakness and Resistance). You can't reduce more than 20 damage in this way.",
            ja: "相手の攻撃によってクローダントに与えられた損害は、クローダントに付着した各暗闇に対して（衰弱と抵抗を適用した後）10削減されます。この方法で20以上のダメージを減らすことはできません。",
            fr: "Tout dommage causé à la mise à grenance par les attaques de votre adversaire est réduit de 10 pour chaque obscurité attachée à la salir (après avoir appliqué une faiblesse et une résistance). Vous ne pouvez pas réduire plus de 20 dégâts de cette manière.",
            de: "Alle Schäden, die durch die Angriffe Ihres Gegners angerichtet wurden, wird für jede an Crawdaunt befestigte Dunkelheit um 10 um 10 reduziert (nachdem Sie Schwäche und Widerstand aufgetragen haben). Auf diese Weise können Sie nicht mehr als 20 Schäden reduzieren.",
            es: "Cualquier daño hecho a Crawdaunt por los ataques de tu oponente se reduce en 10 por cada oscuridad unida a Crawdaunt (después de aplicar debilidad y resistencia). No puede reducir más de 20 daños de esta manera.",
            it: "Qualsiasi danno arrecato a Crawdaunt dagli attacchi del tuo avversario è ridotto di 10 per ogni oscurità attaccata a Crawdaunt (dopo aver applicato la debolezza e la resistenza). Non puoi ridurre più di 20 danni in questo modo.",
            pt: "Qualquer dano causado a Crawdaunt pelos ataques do seu oponente é reduzido em 10 para cada escuridão presa a Crawdaunt (depois de aplicar fraqueza e resistência). Você não pode reduzir mais de 20 danos dessa maneira.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Bubblebeam",
            ja: "バブルビーム",
            fr: "Rayon de bubbler",
            de: "BubbleBeam",
            es: "Rayo de burbuja",
            it: "Bubblebeam",
            pt: "Bubblebeam",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
          damage: 20,
        },
        {
          cost: ["Darkness", "Colorless", "Colorless"],
          name: {
            en: "Cross-Cut",
            ja: "クロスカット",
            fr: "Croix",
            de: "Cross-Cut",
            es: "Cortado transversal",
            it: "Croce",
            pt: "Corte transversal",
          },
          effect: {
            en: "If the Defending Pokemon is an Evolved Pokemon, this attack does 40 damage plus 20 more damage.",
            ja: "防御するポケモンが進化したポケモンである場合、この攻撃は40ダメージに加えて20ダメージを与えます。",
            fr: "Si le Pokémon en défense est un Pokémon évolué, cette attaque fait 40 dégâts plus 20 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokémon ein entwickeltes Pokémon ist, verursacht dieser Angriff 40 Schaden zuzüglich 20 weitere Schäden.",
            es: "Si el Pokémon defensor es un Pokémon evolucionado, este ataque hace 40 daños más 20 más de daño.",
            it: "Se il Pokemon in carica è un Pokemon evoluto, questo attacco infligge 40 danni più 20 danni.",
            pt: "Se o Pokémon atual for um Pokémon evoluído, esse ataque causará 40 danos mais 20 danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
