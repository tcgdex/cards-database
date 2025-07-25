import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Sharpedo (Delta Species)",
         ja: "シャルデド（デルタ種）",
         fr: "Sharpédo (espèces delta)",
         de: "Sharpedo (Delta -Arten)",
         es: "Sharpedo (especie delta)",
         it: "Sharpedo (Delta Species)",
         pt: "Sharedo (espécie Delta)",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [319],
      hp: 70,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Brush Aside",
            ja: "脇にブラシをかけます",
            fr: "Éclater",
            de: "Beiseite streichen",
            es: "Dejar de lado",
            it: "Spazzola da parte",
            pt: "Escove de lado",
          },
          effect: {
            en: "If Sharpedo has any Holon Energy cards attached to it, choose 1 card from your opponent's hand without looking and discard it.",
            ja: "SharpedoにHolon Energy Cardsが接続されている場合は、見ても捨てずに相手の手から1枚のカードを選択してください。",
            fr: "Si Sharpedo a des cartes d'énergie Holon qui y sont attachées, choisissez 1 carte dans la main de votre adversaire sans la regarder et la jeter.",
            de: "Wenn Sharpedo Holon Energy -Karten daran befestigt ist, wählen Sie 1 Karte aus der Hand Ihres Gegners, ohne sie zu schauen, und verwerfen Sie sie.",
            es: "Si Sharpedo tiene alguna tarjeta de energía Holon unidas, elija 1 tarjeta de la mano de su oponente sin mirarlo y descartarla.",
            it: "Se Sharpedo ha delle carte di energia Holon collegate, scegli 1 carta dalla mano del tuo avversario senza guardarlo e scartarla.",
            pt: "Se a Sharpedes tiver algum cartão de energia Holon anexado a ele, escolha 1 cartão da mão do seu oponente sem olhar e descartar.",
          },
          damage: 30,
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Swift Turn",
            ja: "迅速なターン",
            fr: "Virage rapide",
            de: "Schnelle Kurve",
            es: "Giro rápido",
            it: "Swift Turn",
            pt: "Virada rápida",
          },
          effect: {
            en: "If the Defending Pokemon has Fighting Resistance, this attack does 50 damage plus 30 more damage.",
            ja: "防御ポケモンに抵抗がある場合、この攻撃は50のダメージと30のダメージを与えます。",
            fr: "Si le Pokémon en défense a une résistance au combat, cette attaque fait 50 dégâts plus 30 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokemon einen Kampfwiderstand hat, verursacht dieser Angriff 50 Schaden zuzüglich 30 weitere Schäden.",
            es: "Si el Pokémon defensor tiene resistencia a la lucha, este ataque hace 50 daños más 30 daños más.",
            it: "Se il Pokemon in carica ha una resistenza alla lotta, questo attacco infligge 50 danni più 30 danni.",
            pt: "Se o Pokémon atual tiver resistência de combate, esse ataque causará 50 danos mais 30 danos.",
          },
        },
      ],


      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
