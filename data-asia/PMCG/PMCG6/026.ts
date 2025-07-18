import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Blaine's Vulpix",
         ja: "BlaineのVulpix",
         fr: "Vulpix de Blaine",
         de: "Blaines Vulpix",
         es: "Vulpix de Blaine",
         it: "Blaine's Vulpix",
         pt: "Vulpix de Blaine",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [37],
      hp: 40,
      types: ["Fire"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Natural Healing",
            ja: "自然の癒し",
            fr: "Guérison naturelle",
            de: "Natürliche Heilung",
            es: "Curación natural",
            it: "Guarigione naturale",
            pt: "Cura natural",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may remove 1 damage counter from Blaine's Vulpix. This power can't be used if Blaine's Vulpix is Asleep, Confused, or Paralyzed.",
            ja: "ターン中に（攻撃の前）</em> </em>、BlaineのVulpixから1つのダメージカウンターを削除できます。 BlaineのVulpixが眠っている、混乱し、麻痺している場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez supprimer 1 compteur de dégâts du Vulpix de Blaine. Ce pouvoir ne peut pas être utilisé si le Vulpix de Blaine est endormi, confus ou paralysé.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> sind, können Sie 1 Schadenschalter aus Blaines Vulpix entfernen. Diese Kraft kann nicht verwendet werden, wenn Blaines Vulpix schläft, verwirrt oder gelähmt ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede eliminar 1 contador de daño de Vulpix de Blaine. Este poder no se puede usar si Blaine's Vulpix está dormido, confundido o paralizado.",
            it: "Una volta durante il tuo turno <em> (prima dell'attacco) </em>, è possibile rimuovere 1 contatore di danni da Vulpix di Blaine. Questo potere non può essere usato se Vulpix di Blaine è addormentato, confuso o paralizzato.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você poderá remover 1 contador de danos da vulpix de Blaine. Esse poder não pode ser usado se o vulpix de Blaine estiver dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Fire", "Colorless", "Colorless"],
          name: {
            en: "Tail Fan",
            ja: "テールファン",
            fr: "Ventilateur de queue",
            de: "Heckfan",
            es: "Ventilador de cola",
            it: "Fan di coda",
            pt: "Ventilador de cauda",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant confus.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokemon jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está confuso.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
