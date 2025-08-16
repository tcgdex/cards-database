import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Koga's Muk",
         ja: "コガのムック",
         fr: "Muk de Koga",
         de: "Kogas Muk",
         es: "Muk de Koga",
         it: "Koga's Muk",
         pt: "Muk de Koga",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [89],
      hp: 80,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Energy Drain",
            ja: "エネルギー排水",
            fr: "Drainage énergétique",
            de: "Energieabfluss",
            es: "Desagüe",
            it: "Scarico di energia",
            pt: "Dreno de energia",
          },
          effect: {
            en: "If an opponent's attack does damage to Koga's Muk (even if Koga's Muk is Knocked Out), flip a coin. If heads and if it has any, choose 1 Energy card attached to the attacking Pokmon and discard it. This power can't be used if Koga's Muk is already Asleep, Confused, or Paralyzed when your opponent attacks.",
            ja: "相手の攻撃がKogaのMUKにダメージを与えた場合（KogaのMukがノックアウトされたとしても）、コインをひっくり返します。ヘッドとそれがある場合は、攻撃するポクモンに1枚のエネルギーカードを選択して破棄します。コガのMUKがすでに眠っている場合、相手が攻撃したときに眠ったり、混乱したり、麻痺したりしている場合、このパワーは使用できません。",
            fr: "Si l'attaque d'un adversaire endommage le MUK de Koga (même si Muk de Koga est éliminé), retournez une pièce. Si les têtes et si elle en a, choisissez 1 carte d'énergie attachée au Pokmon attaquant et jetez-la. Ce pouvoir ne peut pas être utilisé si le MUK de Koga est déjà endormi, confus ou paralysé lorsque votre adversaire attaque.",
            de: "Wenn der Angriff eines Gegners Schädigung von Kogas Muk (auch wenn Kogas Muk ausgeschaltet wird), drehen Sie eine Münze. Wenn Köpfe und wenn es welche hat, wählen Sie 1 Energiemittel, die an das angreifende Pokmon angebracht ist, und entsorgen Sie sie. Diese Kraft kann nicht verwendet werden, wenn Kogas Muk bereits schläft, verwirrt oder gelähmt ist, wenn Ihr Gegner angreift.",
            es: "Si el ataque de un oponente da daño a Muk de Koga (incluso si el MUK de Koga es noqueado), voltea una moneda. Si se dirige y si tiene alguna, elija 1 tarjeta de energía unida al Pokmon atacante y descarte. Este poder no se puede usar si el muk de Koga ya está dormido, confundido o paralizado cuando tu oponente ataca.",
            it: "Se l'attacco di un avversario infligge il Muk di Koga (anche se il Muk di Koga viene eliminato), capovolgi una moneta. Se la testa e se ne ha, scegli 1 carta di energia collegata al Pokmon attaccante e scartalo. Questo potere non può essere usato se il Muk di Koga è già addormentato, confuso o paralizzato quando il tuo avversario attacca.",
            pt: "Se o ataque de um oponente causar danos ao Muk de Koga (mesmo que o Muk de Koga seja nocauteado), vire uma moeda. Se as cabeças e, se houver alguma, escolha 1 cartão de energia anexado ao Pokmon atacante e descarte -o. Esse poder não pode ser usado se o muk de Koga já estiver dormindo, confuso ou paralisado quando seu oponente ataca.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Grass", "Colorless"],
          name: {
            en: "Sludge Whirlpool",
            ja: "スラッジ渦",
            fr: "Tourbillon de boues",
            de: "Schlamm Whirlpool",
            es: "Remolino de lodo",
            it: "Whirlpool di fanghi",
            pt: "Lodo Whirlpool",
          },
          damage: 40,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "normal",
        },
      ],
};
