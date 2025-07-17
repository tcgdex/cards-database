import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Wailord ex",
         ja: "Wailord ex",
         fr: "Wailord ex",
         de: "Wailord ex",
         es: "Wailord Ex",
         it: "WaiLord Ex",
         pt: "Wailord Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [321],
      hp: 200,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Super Deep Dive",
            ja: "超深潜り",
            fr: "Dive super profonde",
            de: "Super tiefes Tauchgang",
            es: "Buceo súper profundo",
            it: "Immersione super profonda",
            pt: "Mergulho super profundo",
          },
          effect: {
            en: "If you don't have any Benched Pokemon, this attack does nothing. Remove 3 damage counters from Wailord ex.  Switch Wailord ex with 1 of your Benched Pokemon.",
            ja: "ベンチ付きポケモンがない場合、この攻撃は何もしません。 Wailord Exから3つのダメージカウンターを削除します。  ベンチ付きポケモンの1つでWailord Exを切り替えます。",
            fr: "Si vous n'avez pas de Pokémon banc, cette attaque ne fait rien. Retirez 3 compteurs de dégâts de Wailord Ex.  Communiquez Wailord Ex avec 1 de votre Pokémon banc.",
            de: "Wenn Sie kein Bank -Pokemon haben, tut dieser Angriff nichts. Entfernen Sie 3 Schadenszähler von Wailord EX.  Wechseln Sie Wailord EX mit 1 Ihrer Bank -Pokemon.",
            es: "Si no tienes ningún Pokémon de banca, este ataque no hace nada. Retire 3 contadores de daño de Wailord Ex.  Cambie Wailord Ex con 1 de su Pokémon de banca.",
            it: "Se non hai Pokemon in panchina, questo attacco non fa nulla. Rimuovere 3 contatori di danno da WaiLord Ex.  Switch WaiLord Ex con 1 del tuo Pokemon in panchina.",
            pt: "Se você não tem nenhum Pokémon em banco, esse ataque não faz nada. Remova 3 contadores de danos do Wailord Ex.  Switch Wailord Ex com 1 de seu Pokemon em banco.",
          },
        },
        {
          cost: ["Water", "Water", "Water", "Colorless"],
          name: {
            en: "Dwindling Wave",
            ja: "波の減少",
            fr: "Vague de déclin",
            de: "Schwindende Welle",
            es: "Ola disminuida",
            it: "Onda in diminuzione",
            pt: "Onda cada vez menor",
          },
          effect: {
            en: "Does 100 damage minus 10 damage for each damage counter on Wailord ex.",
            ja: "Wailord Exのダメージカウンターごとに100ダメージを引いた10のダメージを引いた。",
            fr: "Fait 100 dégâts moins 10 dégâts pour chaque compteur de dégâts sur Wailord Ex.",
            de: "Fügt 100 Schäden minus 10 Schäden für jeden Schadenschalter auf Wailord Ex.",
            es: "Hace 100 daños menos 10 daños por cada contador de daños en Wailord Ex.",
            it: "Fa 100 danni meno 10 danni per ciascun danno da contatore su WaiLord Ex.",
            pt: "100 danos menos 10 danos para cada contador de danos no Wailord Ex.",
          },
        },
      ],

      retreat: 5,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
