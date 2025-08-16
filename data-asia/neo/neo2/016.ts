import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Poliwhirl",
         ja: "PoliWhirl",
         fr: "Polihirl",
         de: "Poliwhirl",
         es: "Poliwhirl",
         it: "Poliwhirl",
         pt: "Poliwhirl",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [61],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Belly Drum",
            ja: "腹ドラム",
            fr: "Tambour du ventre",
            de: "Bauchtrommel",
            es: "Tambor del vientre",
            it: "Tamburo della pancia",
            pt: "Tambor da barriga",
          },
          effect: {
            en: "Put 3 damage counters on Poliwhirl. If this doesn't Knock Out Poliwhirl, search your deck for up to 2 Basic Energy cards and attach them to Poliwhirl. Shuffle your deck afterward.",
            ja: "PoliWhirlに3つのダメージカウンターを置きます。これがPoliWhirlをノックアウトしない場合は、デッキを最大2つの基本エネルギーカードで検索し、PoliWhirlに取り付けます。その後、デッキをシャッフルします。",
            fr: "Mettez 3 compteurs de dégâts sur Poliwhirl. Si cela ne fait pas éliminer Poliwhirl, recherchez votre deck jusqu'à 2 cartes d'énergie de base et attachez-les à Poliwhirl. Mélanger votre deck par la suite.",
            de: "Legen Sie 3 Schadenszähler auf Poliwhirl. Wenn dies Poliwhirl nicht ausschlägt, suchen Sie Ihr Deck nach bis zu 2 grundlegenden Energiekarten und befestigen Sie sie an Poliwhirl. Mischen Sie anschließend Ihr Deck.",
            es: "Pon 3 contadores de daño en Poliwhirl. Si esto no elimina a Poliwhirl, busque en su mazo hasta 2 cartas de energía básicas y adjuntelas a Poliwhirl. Baraja tu mazo después.",
            it: "Metti 3 contatori di danno su Poliwhirl. Se questo non elimina Poliwhirl, cerca nel tuo mazzo un massimo di 2 carte di energia di base e allegale a Poliwhirl. Shuffle il tuo mazzo in seguito.",
            pt: "Coloque 3 contadores de danos em Poliwhirl. Se isso não derrubar o Poliwhirl, procure seu baralho até 2 cartões básicos de energia e anexe -os a Poliwhirl. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Water", "Water", "Colorless"],
          name: {
            en: "Water Gun",
            ja: "ウォーターガン",
            fr: "Pistolet à eau",
            de: "Wasserpistole",
            es: "Pistola de agua",
            it: "Pistola ad acqua",
            pt: "Pistola de água",
          },
          effect: {
            en: "Does 30 damage plus 10 more damage for each Water Energy attached to Poliwhirl but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
            ja: "PoliWhirlに付随する水エネルギーごとに30のダメージに加えて10ダメージを与えますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で20以上のダメージを追加することはできません。",
            fr: "Fait 30 dégâts plus 10 dommages supplémentaires pour chaque énergie d'eau attachée au polihirl mais pas utilisé pour payer le coût énergétique de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette manière.",
            de: "Fügt 30 Schäden plus 10 weitere Schäden für jede an Poliwhirl befestigte Wasserergie, aber nicht zur Bezahlung der Energiekosten dieses Angriffs. Auf diese Weise können Sie nicht mehr als 20 Schäden hinzufügen.",
            es: "Hace 30 daños más 10 daños más por cada energía de agua unida a Poliwhirl pero no se usa para pagar el costo de energía de este ataque. No puede agregar más de 20 daños de esta manera.",
            it: "Fa 30 danni più 10 danni per ogni energia idrica attaccata a Poliwhirl ma non è usato per pagare il costo energetico di questo attacco. Non puoi aggiungere più di 20 danni in questo modo.",
            pt: "30 danos mais 10 mais danos para cada energia da água ligada a Poliwhirl, mas não costumava pagar pelo custo de energia desse ataque. Você não pode adicionar mais de 20 danos dessa maneira.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
