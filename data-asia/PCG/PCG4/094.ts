import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Forretress",
         ja: "forretress",
         fr: "Forêt",
         de: "Forressress",
         es: "Forrar",
         it: "Forrettrice",
         pt: "Forretress",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [205],
      hp: 70,
      types: ["Metal"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Spiky Shell",
            ja: "スパイクシェル",
            fr: "Coquille épineuse",
            de: "Stachelschale",
            es: "Cáscara",
            it: "Guscio appuntito",
            pt: "Concha pontiaguda",
          },
          effect: {
            en: "Put 3 damage counters on the Defending Pokemon at the end of your opponent's next turn.",
            ja: "対戦相手の次のターンの終わりに、防御ポケモンに3つのダメージカウンターを置きます。",
            fr: "Mettez 3 compteurs de dégâts sur le Pokémon en défense à la fin du prochain tour de votre adversaire.",
            de: "Legen Sie am Ende der nächsten Runde Ihres Gegners 3 Schadenszähler auf das verteidigende Pokémon.",
            es: "Pon 3 contadores de daño en el Pokémon defensor al final del próximo turno de tu oponente.",
            it: "Metti 3 contatori di danno sul Pokemon in carica alla fine del prossimo turno del tuo avversario.",
            pt: "Coloque 3 contadores de danos no Pokémon atual no final do próximo turno do seu oponente.",
          },
          damage: 20,
        },
        {
          cost: ["Metal", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Pop",
            ja: "ポップ",
            fr: "Populaire",
            de: "Pop",
            es: "Estallido",
            it: "Pop",
            pt: "Pop",
          },
          effect: {
            en: "Put 7 damage counters on Forretress. Move all Energy cards attached to Forretress to your Benched Pokemon in any way you like. (Ignore this effect if you don't have any Benched Pokemon.)",
            ja: "forretressに7つのダメージカウンターを置きます。 forretressに取り付けられたすべてのエネルギーカードをベンチポケモンに移動します。 （ベンチ付きポケモンがない場合は、この効果を無視してください。）",
            fr: "Mettez 7 compteurs de dégâts sur Forredress. Déplacez toutes les cartes d'énergie attachées à Forredress à votre pokemon bancé de quelque manière que ce soit. (Ignorez cet effet si vous n'avez pas de Pokémon banc.)",
            de: "Setzen Sie 7 Schadenszähler auf die Forresress. Bewegen Sie alle Energiekarten, die an Forresress befestigt sind, auf Ihre mögliche Weise auf Ihr Bankpokémon. (Ignorieren Sie diesen Effekt, wenn Sie kein Pokémon mit Bank haben.)",
            es: "Pon 7 contadores de daño en Forretress. Mueva todas las tarjetas de energía unidas a ForRetress a su Pokémon de banca de cualquier manera que desee. (Ignora este efecto si no tienes ningún pokemon de banca).",
            it: "Metti 7 contatori di danno su Forress. Sposta tutte le carte energetiche collegate a Forretress al tuo Pokemon in panchina in ogni modo che desideri. (Ignora questo effetto se non hai Pokemon in panchina.)",
            pt: "Coloque 7 contadores de danos no Forreretress. Mova todos os cartões de energia anexados à forreta ao seu Pokemon em banco da maneira que quiser. (Ignore esse efeito se você não tiver nenhum Pokémon em banco.)",
          },
          damage: 100,
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
