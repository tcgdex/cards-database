import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Electrode",
         ja: "暗い電極",
         fr: "Électrode noire",
         de: "Dunkle Elektrode",
         es: "Electrodo oscuro",
         it: "Elettrodo scuro",
         pt: "Eletrodo escuro",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [101],
      hp: 60,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Rolling Tackle",
            ja: "ローリングタックル",
            fr: "Tacle roulant",
            de: "Rolling Tackle",
            es: "Tacleada",
            it: "Attrezzatura rotolante",
            pt: "Tackle rolante",
          },
          damage: 10,
        },
        {
          cost: ["Lightning", "Lightning"],
          name: {
            en: "Energy Bomb",
            ja: "エネルギー爆弾",
            fr: "Bombe énergétique",
            de: "Energiebombe",
            es: "Bomba de energía",
            it: "Bomba energetica",
            pt: "Bomba de energia",
          },
          effect: {
            en: "Take all Energy cards attached to Dark Electrode and attach them to your Benched Pokemon (in any way you choose). If you have no Benched Pokemon, discard all Energy cards attached to Dark Electrode.",
            ja: "暗い電極に取り付けられたすべてのエネルギーカードを取り、ベンチポケモンに取り付けます（どんな方法でも）。ベンチ付きポケモンがない場合は、暗い電極に取り付けられたすべてのエネルギーカードを捨ててください。",
            fr: "Prenez toutes les cartes d'énergie attachées à l'électrode noire et attachez-les à votre pokemon bancé (de quelque manière que ce soit que vous choisissez). Si vous n'avez pas de Pokémon banc, jetez toutes les cartes d'énergie attachées à l'électrode noire.",
            de: "Nehmen Sie alle an der dunklen Elektrode befestigten Energiekarten und befestigen Sie sie an Ihrem Bank -Pokémon (in irgendeiner Weise, die Sie auswählen). Wenn Sie kein Bank -Pokemon haben, entsorgen Sie alle an der dunklen Elektrode befestigten Energiekarten.",
            es: "Tome todas las tarjetas de energía unidas al electrodo oscuro y adhiérase a su banca Pokémon (de cualquier manera que elija). Si no tiene Pokémon de banca, deseche todas las tarjetas de energía unidas al electrodo oscuro.",
            it: "Prendi tutte le carte di energia collegate all'elettrodo scuro e attaccali al tuo Pokemon in panchina (in ogni modo che scegli). Se non hai Pokemon in panchina, scartare tutte le carte di energia collegate all'elettrodo scuro.",
            pt: "Pegue todos os cartões de energia anexados ao eletrodo escuro e prendam -os ao seu Pokémon em banco (da maneira que você escolher). Se você não tiver Pokemon em bancada, descarte todos os cartões de energia conectados ao eletrodo escuro.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
