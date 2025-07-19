import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Roselia",
         ja: "ローゼリア",
         fr: "Roselia",
         de: "Rosselia",
         es: "Roselia",
         it: "Roselia",
         pt: "Roselia",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [315],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Reactive Aroma",
            ja: "反応性の香り",
            fr: "Arôme réactif",
            de: "Reaktives Aroma",
            es: "Aroma reactivo",
            it: "Aroma reattivo",
            pt: "Aroma reativo",
          },
          effect: {
            en: "As long as Roselia has any React Energy cards attached to it, remove 1 damage counter from each of your PokÃ©mon (excluding PokÃ©mon-ex) that has any React Energy cards attached to it between turns. You can't use more than 1 Reactive Aroma PokÃ©-Body each turn.",
            ja: "RoseliaにReact Energy Cardsが取り付けられている限り、ターンの間にReact Energy Cardを取り付けているPokã©Mon（Pokã©Mon-Exを除く）のそれぞれから1つのダメージカウンターを削除します。 1ターンを1ターン以上使用することはできません。",
            fr: "Tant que Roselia a des cartes d'énergie de réaction qui y sont fixées, supprimez 1 compteur de dégâts de chacun de vos pokã © Mon (à l'exclusion de Pokã © Mon-EX) qui a des cartes d'énergie réagites qui y sont attachées entre les virages. Vous ne pouvez pas utiliser plus d'un arôme réactif Pokã © -Body à chaque tour.",
            de: "Solange Roselia über React-Energy-Karten befestigt ist, entfernen Sie 1 Schadenschalter von jedem Ihrer Poké Mon (mit Ausnahme von Poké Mon-EX), der zwischen den Kurven irgendwelche React-Energiekarten befindet. Sie können nicht mehr als 1 reaktives Aroma-Poké-Körper in jeder Runde verwenden.",
            es: "Mientras Roselia tenga alguna tarjetas de energía reaccionadas adjuntas, elimine 1 contador de daño de cada uno de sus Poké Mon (excluyendo Poké Mon-Ex) que tiene alguna tarjetas de energía reaccionadas adjuntas entre turnos. No puede usar más de 1 aroma reactivo Poké a cuerpo en cada giro.",
            it: "Finché Roselia ha qualsiasi scheda di energia di reazione collegata ad essa, rimuovi 1 contatore di danni da ciascuno dei tuoi poké (escluso Poké mon-ex) che ha qualsiasi scheda di energia di reazione collegata ad esso tra le curve. Non è possibile utilizzare più di 1 aroma reattivo Pokã © -body ogni turno.",
            pt: "Enquanto Roselia possui qualquer cartões de energia do React anexados a ele, remova 1 contador de danos de cada um dos seus Poké Mon (excluindo Poké Mon-Ex) que possui qualquer cartões de energia do React anexados a ele entre as voltas. Você não pode usar mais de 1 aroma reativo Poké-corpo a cada turno.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Flick Poison",
            ja: "フリック毒",
            fr: "Flick Poison",
            de: "Flick Gift",
            es: "Veneno de película",
            it: "Veleno da film",
            pt: "Pontos de filme",
          },
          effect: {
            en: "Switch 1 of your opponent's Benched Pokemon with 1 of the Defending Pokemon. Your opponent chooses the Defending Pokemon to switch. The new Defending Pokemon is now Poisoned.",
            ja: "対戦相手のベンチポケモンの1つを防御ポケモンの1つに切り替えます。対戦相手は、防御するポケモンを選択して切り替えます。新しい防御ポケモンは現在毒されています。",
            fr: "Communiquez 1 des Pokémon bancés de votre adversaire avec 1 des Pokémon en défense. Votre adversaire choisit le Pokémon en défense pour changer. Le nouveau Pokémon défendant est maintenant empoisonné.",
            de: "Wechseln Sie 1 des Pokémon Ihres Gegners mit einem der verteidigenden Pokémon. Ihr Gegner wählt das verteidigende Pokemon zum Wechseln. Das neue verteidigende Pokemon ist jetzt vergiftet.",
            es: "Cambie 1 del Pokémon de banca de tu oponente con 1 del Pokémon defensor. Tu oponente elige el Pokémon defensor para cambiar. El nuevo Pokémon defensor ahora está envenenado.",
            it: "Switch 1 del Pokemon in panchina del tuo avversario con 1 del Pokemon in difesa. Il tuo avversario sceglie il Pokemon in carica da cambiare. Il nuovo Pokemon in carica è ora avvelenato.",
            pt: "Switch 1 do Pokémon bancado do seu oponente com 1 do Pokémon atual. Seu oponente escolhe o pokemon defensor para mudar. O novo Pokémon atual está agora envenenado.",
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
