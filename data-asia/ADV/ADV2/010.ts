import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Cradily",
         ja: "ゆっくりと",
         fr: "Bêtide",
         de: "Cradily",
         es: "Con cuna",
         it: "Cradiosamente",
         pt: "Infelizmente",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [346],
      hp: 100,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Super Suction Cups",
            ja: "スーパー吸引カップ",
            fr: "Super sous-ventouse",
            de: "Super Saugnäurebecher",
            es: "Super Suction Cups",
            it: "Super aspirazione",
            pt: "Super Cups de sucção",
          },
          effect: {
            en: "As long as Cradily is your Active Pokémon, your opponent's Pokémon can't retreat.",
            ja: "ゆっくりとあなたのアクティブなポケモンである限り、相手のポケモンは退却できません。",
            fr: "Tant que Cradily est votre Pokémon actif, le Pokémon de votre adversaire ne peut pas se retirer.",
            de: "Solange so lange Ihr aktives Pokémon ist, kann sich das Pokémon Ihres Gegners nicht zurückziehen.",
            es: "Mientras cradio sea tu Pokémon activo, el Pokémon de tu oponente no puede retirarse.",
            it: "Fintanto che è schifoso il tuo Pokémon attivo, i Pokémon del tuo avversario non possono ritirarsi.",
            pt: "Enquanto isso é o seu Pokémon ativo, o Pokémon do seu oponente não pode recuar.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Lure Poison",
            ja: "毒を誘います",
            fr: "Poison à attirer",
            de: "Gift locken",
            es: "Apretar veneno",
            it: "Attira avvelena",
            pt: "Lure Poison",
          },
          effect: {
            en: "Before using this effect, you may switch the Defending Pokemon with 1 of your opponent's Benched Pokemon, if any. The Defending Pokemon is now Poisoned.",
            ja: "この効果を使用する前に、防御ポケモンを相手のベンチ付きポケモンの1つで切り替えることができます。防御ポケモンは現在中毒になっています。",
            fr: "Avant d'utiliser cet effet, vous pouvez changer le Pokémon en défense avec 1 des pokemon bancés de votre adversaire, le cas échéant. Le Pokémon en défense est maintenant empoisonné.",
            de: "Bevor Sie diesen Effekt verwenden, können Sie das verteidigende Pokémon mit einem der Bankpokemon Ihres Gegners, falls vorhanden, einschalten. Das verteidigende Pokemon ist jetzt vergiftet.",
            es: "Antes de usar este efecto, puede cambiar el Pokémon defensor con 1 de los Pokémon de banca de tu oponente, si lo hay. El Pokémon defensor ahora está envenenado.",
            it: "Prima di utilizzare questo effetto, è possibile cambiare il Pokemon in difesa con 1 del Pokemon in panchina del tuo avversario, se presente. Il Pokemon in carica è ora avvelenato.",
            pt: "Antes de usar esse efeito, você pode alternar o Pokémon defensivo com 1 dos Pokémon em bancada do seu oponente, se houver. O Pokémon atual agora está envenenado.",
          },
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Spiral Drain",
            ja: "スパイラルドレイン",
            fr: "Spiritin en spirale",
            de: "Spiralabfluss",
            es: "Desagüe",
            it: "Scarico a spirale",
            pt: "Dreno em espiral",
          },
          effect: {
            en: "Remove 2 damage counters from Cradily (remove 1 if there is only 1).",
            ja: "2つのダメージカウンターをゆっくりと削除します（1つしかない場合は1を削除します）。",
            fr: "Retirez 2 compteurs de dégâts de la banalily (retirer 1 s'il n'y en a que 1).",
            de: "Entfernen Sie 2 Schadensschalter von The Cradeily (entfernen Sie 1, wenn nur 1 vorhanden ist).",
            es: "Retire 2 contadores de daño de la cradio (elimine 1 si solo hay 1).",
            it: "Rimuovere 2 contatori di danno da Cradily (rimuovi 1 se c'è solo 1).",
            pt: "Remova 2 contadores de danos do bobo (remova 1 se houver apenas 1).",
          },
          damage: 50,
        },
      ],

      retreat: 2,

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
