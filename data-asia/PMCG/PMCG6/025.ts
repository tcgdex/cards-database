import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Blaine's Charmander",
         ja: "ブレインのチャーチャンダー",
         fr: "Charmander de Blaine",
         de: "Blaines Charmander",
         es: "Charmander de Blaine",
         it: "Blaine's Charmander",
         pt: "Charmander de Blaine",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [4],
      hp: 50,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fire"],
          name: {
            en: "Kindle",
            ja: "Kindle",
            fr: "Allumer",
            de: "Entzünden",
            es: "Encender",
            it: "Accendere",
            pt: "Acender",
          },
          effect: {
            en: "Discard 1 Energy card attached to Blaine's Charmander in order to use this attack. If the Defending Pokemon has any Energy cards attached to it, choose 1 of them and discard it.",
            ja: "この攻撃を使用するために、ブレインのチャーマンダーに取り付けられた1つのエネルギーカードを捨ててください。防御するポケモンにエネルギーカードが接続されている場合は、それらの1つを選択して破棄します。",
            fr: "Jetez 1 carte d'énergie attachée au charmander de Blaine afin d'utiliser cette attaque. Si le Pokémon en défense a des cartes d'énergie qui y sont attachées, choisissez-y 1 et jetez-la.",
            de: "Verwerfen Sie 1 Energiekarte an Blaines Charmander, um diesen Angriff zu verwenden. Wenn das verteidigende Pokémon an Energiekarten verbunden ist, wählen Sie 1 davon und verwerfen Sie es.",
            es: "Deseche 1 tarjeta de energía unida al Charmander de Blaine para usar este ataque. Si el Pokémon defensor tiene alguna tarjetas de energía unidas, elija 1 de ellas y deséchela.",
            it: "Scartare 1 carta energetica attaccata a Charmander di Blaine per usare questo attacco. Se il Pokemon in difesa ha delle carte energetiche ad esso collegate, scegli 1 e scartalo.",
            pt: "Descarte 1 cartão de energia anexado ao Charmander de Blaine para usar esse ataque. Se o Pokémon atual tiver algum cartão de energia anexado a ele, escolha 1 deles e descarte -o.",
          },
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Slash",
            ja: "スラッシュ",
            fr: "Sabrer",
            de: "Schrägstrich",
            es: "Barra oblicua",
            it: "Barra",
            pt: "Slash",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
