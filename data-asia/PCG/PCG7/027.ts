import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Omastar (Delta Species)",
         ja: "OMASTAR（デルタ種）",
         fr: "Omastar (espèces delta)",
         de: "Omastar (Delta -Arten)",
         es: "OmaStar (especie delta)",
         it: "Omastar (Delta Species)",
         pt: "Omastar (espécies delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [139],
      hp: 110,
      types: ["Psychic"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Bind",
            ja: "バインド",
            fr: "Lier",
            de: "Binden",
            es: "Unir",
            it: "Legamento",
            pt: "Vincular",
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
          damage: 30,
        },
        {
          cost: ["Psychic", "Colorless", "Colorless"],
          name: {
            en: "Vengeful Spikes",
            ja: "復geのスパイク",
            fr: "Pointes vengeantes",
            de: "Rachsüchtige Spikes",
            es: "Picos vengativos",
            it: "Picchi vendicativi",
            pt: "Picos vingativos",
          },
          effect: {
            en: "Does 30 damage plus 10 more damage for each Omanyte, Omastar, Kabuto, Kabutops, and Kabutops ex in your discard pile. You can't add more than 60 damage in this way.",
            ja: "30のダメージに加えて、オマンテ、オマスター、カブト、カブトップス、カブトップスごとにさらに10ダメージを与えます。この方法で60以上のダメージを追加することはできません。",
            fr: "Fait 30 dégâts plus 10 dommages supplémentaires pour chaque Omanyte, Omastar, Kabuto, Kabutops et Kabutops Ex dans votre tas de défausse. Vous ne pouvez pas ajouter plus de 60 dégâts de cette manière.",
            de: "Fügt 30 Schäden plus 10 weitere Schäden für jede Omanyte, Omastar, Kabuto, Kabutops und Kabutops EX in Ihrem Entwurfshaufen. Auf diese Weise können Sie nicht mehr als 60 Schäden hinzufügen.",
            es: "Hace 30 daños más 10 daños más para cada Omanyte, OmaStar, Kabuto, Kabutops y Kabutops EX en su pila de descarte. No puede agregar más de 60 daños de esta manera.",
            it: "Fa 30 danni più 10 danni per ogni Omanyte, Omastar, Kabuto, Kabutops e Kabutops Ex nella tua pila di scarto. Non puoi aggiungere più di 60 danni in questo modo.",
            pt: "Os 30 danos mais 10 danos a cada Omanyte, Omastar, Kabuto, Kabutops e Kabutops ex na sua pilha de descarte. Você não pode adicionar mais de 60 danos dessa maneira.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
