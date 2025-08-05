import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Feraligatr - 112/128",
         ja: "feraligatr -112/128",
         fr: "Feraligatr - 112/128",
         de: "Feraligatr - 112/128",
         es: "Feraligatr - 112/128",
         it: "Feraligatr - 112/128",
         pt: "Feraligatr - 112/128",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [160],
      hp: 120,
      types: ["Water"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Major Tsunami",
            ja: "津波少佐",
            fr: "Tsunami majeur",
            de: "Major Tsunami",
            es: "Mayor tsunami",
            it: "Maggiore tsunami",
            pt: "Tsunami principal",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, if Feraligatr is your Active Pokmon and if your opponent has any Benched Pokmon, your opponent switches his or her Active Pokmon with 1 of his or her Benched Pokmon. Either way, if you have any Benched Pokmon, switch Feraligatr with 1 of them. This power can't be used if Feraligatr is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前）</em>、feraligatrがアクティブなポクモンであり、相手がベンチポクモンを持っている場合、対戦相手は1匹のベンチポクモンでアクティブなポクモンを切り替えます。いずれにせよ、ベンチを持っている場合は、Pokmonをベンチしている場合は、それらの1つを使用してFeraligatrを切り替えます。 Feraligatrが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, si Feraligatr est votre pokmon actif et si votre adversaire a un pokmon banc, votre adversaire change son pokmon actif avec un de son pokmon banc. Quoi qu'il en soit, si vous avez un pokmon banc, changez de Feraligatr avec 1 d'entre eux. Ce pouvoir ne peut pas être utilisé si Feraligatr est affecté par une condition spéciale.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff) </em>, wenn feraligatr Ihr aktives Pokmon ist und wenn Ihr Gegner Pokmon mit Bank hat, wechselt Ihr Gegner sein aktives Pokmon mit einem seiner oder ihres Bank -Pokmon. Wenn Sie Pokmon mit Bank haben, wechseln Sie bei 1 von ihnen. Diese Kraft kann nicht angewendet werden, wenn Feraligatr von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante tu turno <em> (antes de tu ataque) </em>, si Feraligatr es tu Pokmon activo y si tu oponente tiene algún Pokmon de banca, tu oponente cambia su Pokmon activo con 1 de su Pokmon en banca. De cualquier manera, si tiene algún pokmon de banca, cambie Feraligatr con 1 de ellos. Esta potencia no se puede usar si Feraligatr se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, se Feraligatr è il tuo Pokmon attivo e se il tuo avversario ha qualche Pokmon in panchina, il tuo avversario cambia Pokmon attivo con 1 dei suoi Pokmon in panchina. Ad ogni modo, se hai dei Pokmon in panchina, cambia Feraligatr con 1 di essi. Questa potenza non può essere utilizzata se Feraligatr è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, se Feraligatr for o seu Pokmon ativo e se seu oponente tiver algum Pokmon em bancada, seu oponente troca seu Pokmon ativo com 1 do seu Pokmon em banco. De qualquer maneira, se você tiver algum Pokmon em bancada, mude de Feraligatr com 1 deles. Esse poder não pode ser usado se o Feraligatr for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Water", "Colorless", "Colorless"],
          name: {
            en: "Rending Jaws",
            ja: "レンディングジョーズ",
            fr: "Rendre des mâchoires",
            de: "Kiefer machen",
            es: "Jaws de desgarrado",
            it: "Rending Jaws",
            pt: "JAWS RENTENDO",
          },
          effect: {
            en: "If there are no damage counters on the Defending Pokemon, this attack's base damage is 40 instead of 70.",
            ja: "防御ポケモンにダメージカウンターがない場合、この攻撃のベースダメージは70ではなく40です。",
            fr: "S'il n'y a pas de compteurs de dégâts sur le Pokémon en défense, les dégâts de base de cette attaque sont de 40 au lieu de 70.",
            de: "Wenn das verteidigende Pokemon keine Schadenszähler gibt, beträgt der Grundschaden dieses Angriffs 40 anstelle von 70.",
            es: "Si no hay contadores de daño en el Pokémon defensor, el daño base de este ataque es 40 en lugar de 70.",
            it: "Se non ci sono contatori di danno sul Pokemon in difesa, il danno base di questo attacco è 40 anziché 70.",
            pt: "Se não houver contadores de danos no Pokémon atual, o dano básico deste ataque será 40 em vez de 70.",
          },
          damage: 70,
        },
      ],

      retreat: 3,

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
