import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Ludicolo",
         ja: "ルディコロ",
         fr: "Ludicolo",
         de: "Ludicolo",
         es: "Ludicolo",
         it: "Ludicolo",
         pt: "Ludicolo",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [272],
      hp: 90,
      types: ["Water"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Rain Dish",
            ja: "雨皿",
            fr: "Plat de pluie",
            de: "Regenschale",
            es: "Plato de lluvia",
            it: "Piatto di pioggia",
            pt: "Prato de chuva",
          },
          effect: {
            en: "At any time between turns, remove 1 damage counter from Ludicolo.",
            ja: "ターンの間にいつでも、Ludicoloから1つのダメージカウンターを取り外します。",
            fr: "À tout moment entre les virages, retirez 1 compteur de dégâts de Ludicolo.",
            de: "Entfernen Sie jederzeit zwischen den Kurven 1 Schadenschalter aus Ludicolo.",
            es: "En cualquier momento entre turnos, elimine 1 contador de daño de Ludicolo.",
            it: "In qualsiasi momento tra i turni, rimuovere 1 contatore di danni da Ludicolo.",
            pt: "A qualquer momento entre as voltas, remova 1 contador de danos de Ludicolo.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Hydro Punch",
            ja: "ハイドロパンチ",
            fr: "Hydro Punch",
            de: "Hydro Punch",
            es: "Hydro Punch",
            it: "Punch idroelettrico",
            pt: "Hydro Punch",
          },
          effect: {
            en: "Does 50 damage plus 10 more damage for each Water Energy attached to Ludicolo but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
            ja: "Ludicoloに付着した各水エネルギーに対して50のダメージと10のダメージがさらに10件のダメージを与えますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で20以上のダメージを追加することはできません。",
            fr: "Fait 50 dégâts plus 10 dommages supplémentaires pour chaque énergie d'eau attachée à Ludicolo, mais pas utilisé pour payer le coût énergétique de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette manière.",
            de: "Fügt 50 Schäden plus 10 weitere Schäden für jede an Ludicolo befestigte Wasserergie, aber nicht zur Bezahlung der Energiekosten dieses Angriffs. Auf diese Weise können Sie nicht mehr als 20 Schäden hinzufügen.",
            es: "Hace 50 daños más 10 daños más por cada energía de agua unida a Ludicolo pero no se usa para pagar el costo de energía de este ataque. No puede agregar más de 20 daños de esta manera.",
            it: "Fa 50 danni più 10 danni in più per ogni energia idrica attaccata a Ludicolo ma non utilizzata per pagare il costo energetico di questo attacco. Non puoi aggiungere più di 20 danni in questo modo.",
            pt: "Causam 50 danos mais 10 mais danos para cada energia da água ligada ao ludicolo, mas não costumava pagar pelo custo de energia desse ataque. Você não pode adicionar mais de 20 danos dessa maneira.",
          },
        },
      ],

      retreat: 2,

};
