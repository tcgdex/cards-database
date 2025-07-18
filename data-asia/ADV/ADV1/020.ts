import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Sharpedo",
         ja: "シャルデド",
         fr: "Acier",
         de: "Sharpedo",
         es: "Agudo",
         it: "Sharpedo",
         pt: "Sharped",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [319],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Rough Skin",
            ja: "粗い肌",
            fr: "Peau rugueuse",
            de: "Raue Haut",
            es: "Piel áspera",
            it: "Pelle ruvida",
            pt: "Pele áspera",
          },
          effect: {
            en: "If Sharpedo is your Active PokÃ©mon and is damaged by an opponent's attack (even if Sharpedo is Knocked Out), put 2 damage counters on the Attacking PokÃ©mon.",
            ja: "SharpedoがアクティブなPokã©Monであり、対戦相手の攻撃によって損傷を受けている場合（Sharpedoがノックアウトされたとしても）、攻撃するPokã©Monに2つのダメージカウンターを入れます。",
            fr: "Si Sharpedo est votre poké actif et est endommagé par l'attaque d'un adversaire (même si Sharpedo est éliminée), mettez 2 compteurs de dégâts sur le Pokã © lun.",
            de: "Wenn Sharpedo Ihr aktiver Poké Mon Mon ist und durch den Angriff eines Gegners beschädigt wird (auch wenn Sharpedo ausgeschaltet wird), setzen Sie 2 Schadenszähler auf den angreifenden Poké Mon Mon.",
            es: "Si Sharpedo es tu Poké Mon activo y está dañado por el ataque de un oponente (incluso si Sharpedo es noqueado), ponga 2 contadores de daño en el Poké Mon atacante.",
            it: "Se Sharpedo è il tuo poké attivo ed è danneggiato dall'attacco di un avversario (anche se viene eliminato Sharpedo), metti 2 contatori di danno sul poké mon.",
            pt: "Se o Sharped é o seu Poké Mon ativo e for danificado pelo ataque de um oponente (mesmo que o Sharpede seja nocauteado), coloque 2 contadores de danos no Poké de ataque.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Dark Slash",
            ja: "暗いスラッシュ",
            fr: "Slash sombre",
            de: "Dunkler Schrägstrich",
            es: "Barra de corte oscuro",
            it: "Slash scuro",
            pt: "Barra escura",
          },
          effect: {
            en: "You may discard a Darkness Energy card attached to Sharpedo. If you do, this attack does 40 damage plus 30 more damage.",
            ja: "Sharpedoに取り付けられたDarkness Energyカードを捨てることができます。そうした場合、この攻撃は40ダメージに加えて30ダメージを与えます。",
            fr: "Vous pouvez jeter une carte d'énergie de l'obscurité attachée à Sharpedo. Si vous le faites, cette attaque fait 40 dégâts plus 30 dégâts supplémentaires.",
            de: "Sie können eine an Sharpedo befestigte Dunkelheitsenergiekarte verwerfen. Wenn Sie dies tun, verursacht dieser Angriff 40 Schäden plus 30 weitere Schäden.",
            es: "Puede descartar una tarjeta de energía de oscuridad unida a Sharpedo. Si lo haces, este ataque hace 40 daños más 30 más de daño.",
            it: "Puoi scartare una carta energetica oscura attaccata a Sharpedo. Se lo fai, questo attacco infligge 40 danni più 30 danni in più.",
            pt: "Você pode descartar um cartão de energia da escuridão anexado ao Sharped. Se o fizer, esse ataque causa 40 danos mais 30 mais danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
